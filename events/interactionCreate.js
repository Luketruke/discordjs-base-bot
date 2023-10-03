import { InteractionType, PermissionsBitField } from "discord.js";

const commandCooldowns = {};

/**
 * @type {import("..").EventHandler}
 */
export default {
  name: "interactionCreate",

  run: async (client, interaction) => {
    try {
      // code
      if (interaction.user.bot) return;

      if (!interaction.guild) {
        return client.send(interaction, {
          content:
            "Commands in DMs are not currently supported. Please run this command in a server.",
          ephemeral: false,
        });
      }

      if (interaction.type === InteractionType.ApplicationCommand) {
        const command = client.scommands.get(interaction.commandName);
        if (!command) {
          return client.send(interaction, {
            content: `\`${interaction.commandName}\` is not a valid command !!`,
            ephemeral: true,
          });
        } else {
          // Check if the user has cooldown
          if (!commandCooldowns[interaction.user.id]) {
            commandCooldowns[interaction.user.id] = {};
          }

          const now = Date.now();
          const cooldownTime = 3 * 1000; // 3 seconds in miliseconds, you can change this value
          const lastCommandTime =
            commandCooldowns[interaction.user.id][command.name] || 0;

          if (now - lastCommandTime < cooldownTime) {
            const timeLeft = (lastCommandTime + cooldownTime - now) / 1000;

            return client.sendEmbed(
              interaction,
              `You must wait ${timeLeft.toFixed(
                1
              )} seconds before using this command again.`,
              true
            );
          }

          commandCooldowns[interaction.user.id][command.name] = now;

          if (
            command.userPermissions &&
            !interaction.member.permissions.has(
              PermissionsBitField.resolve(command.userPermissions)
            )
          ) {
            return client.sendEmbed(
              interaction,
              `You don't have enough permissions to use this command.`,
              true
            );
          } else if (
            command.botPermissions &&
            !interaction.guild.members.me.permissions.has(
              PermissionsBitField.resolve(command.botPermissions)
            )
          ) {
            return client.sendEmbed(
              interaction,
              `I don't have enough permissions to perform this command.`
            );
          } else {
            command.run(client, interaction);
          }
        }
      }
    } catch (error) {
      console.error("Error during creating interaction" + error);
    }
  },
};