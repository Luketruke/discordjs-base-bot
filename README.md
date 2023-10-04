
# Discord Bot Base Developed with Discord.JS

This is a base structure for a Discord bot developed using Discord.JS. It includes message and interaction handlers, a TopGG AutoPoster, and the option to integrate PostgreSQL with your bot.

## Installation

To get started, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/Luketruke/discordjs-base-bot.git
   ```

2. Open the cloned folder and navigate to the **.env** file to configure your bot. You will have a file similar to the example below.

   ![Example Image](https://i.imgur.com/VYiieZ1.png)

3. Set up the settings for your bot and test it using **node .** in the console. If everything is configured correctly, after running the command, you should see something similar to the example below.

   ![Example Image](https://i.imgur.com/rAUbDrX.png)



## Notes

If you want to use PostgreSQL, import **pool** from **"../../configs/Connection.js"** within your commands. Inside **Connection.js**, you have already imported the necessary components to run a PostgreSQL Database.

If you do not want to use the TopGG AutoPoster, go to `index.js` and comment out these lines:

```javascript
const ap = AutoPoster(
    process.env.TOPGG_TOKEN,
    client
);

ap.on("posted", () => {
    console.log("Posted stats to Top.gg!");
});
```
## Contact

If you have any questions or need assistance, feel free to reach out to me on Discord:

- **Discord:** Luketruke
