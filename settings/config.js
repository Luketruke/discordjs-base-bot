import { Colors } from "discord.js";
import dotenv from 'dotenv';

dotenv.config();

console.log('DISCORD_BOT_TOKEN:', process.env.DISCORD_BOT_TOKEN);

const settings = {
  TOKEN: process.env.DISCORD_BOT_TOKEN,
  PREFIX: process.env.PREFIX,
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
