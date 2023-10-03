import { Bot } from "./handlers/Client.js";
import { AutoPoster } from "topgg-autoposter";

const client = new Bot();

client.build(client.config.TOKEN);

//Your Top.GG Token, this function send the information about bot once every 30 minutes.
const ap = AutoPoster(
  "29034fdwfdji23040", //Change this
  client
);

ap.on("posted", () => {
  console.log("Posted stats to Top.gg!");
});