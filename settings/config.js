import { Colors } from "discord.js";
import dotenv from 'dotenv';

dotenv.config();

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
