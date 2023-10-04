import { Bot } from "./handlers/Client.js";
import { AutoPoster } from "topgg-autoposter";
import dotenv from 'dotenv';

dotenv.config();

const client = new Bot();

client.build(client.config.TOKEN);

// AutoPoster once every 30 minutes to TOPGG
const ap = AutoPoster(
  process.env.TOPGG_TOKEN, 
  client
);

ap.on("posted", () => {
  console.log("Posted stats to Top.gg!");
});