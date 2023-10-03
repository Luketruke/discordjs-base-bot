import { Colors } from "discord.js";

const settings = {
  TOKEN: process.env.TOKEN || "9i2134978234789327849", //Your discord bot token
  PREFIX: "/",
  Owners: ["1234435453345"], //Your Discord User ID
  Slash: {
    Global: true,
  },
  embed: {
    color: Colors.Blurple,
    wrongColor: Colors.Red,
  },
  emoji: {
    success: "✅",
    error: "❌",
  },
};

export default settings;
