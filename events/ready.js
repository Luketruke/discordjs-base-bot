import { ActivityType } from "discord.js";

/**
 * @type {import("..").EventHandler}
 */
export default {
  name: "ready",

  run: async (client) => {
    console.log(`> ${client.user.tag} is Ready !!`);
    client.user.setActivity({
      name: `/help`,
      type: ActivityType.Playing,
    });
  },
};
