const { config } = require('seyfert');
require("dotenv").config();

module.exports = config.bot({
    token: process.env.BOT_TOKEN ?? "",
    intents: ["Guilds"],
    locations: {
        base: "src",
        output: "dist", //If you are using bun, set "src" instead
        commands: "commands",
        events: "events"
    }
});