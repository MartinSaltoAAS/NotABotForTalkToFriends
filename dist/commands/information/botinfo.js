"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const seyfert_1 = require("seyfert");
let BotinfoCommand = class BotinfoCommand extends seyfert_1.Command {
    async run(ctx) {
        const client = ctx.client;
        const BotInfoEmbed = new seyfert_1.Embed()
            .setTitle("Bot Information")
            .setFields([
            { name: "ID", value: `${client.botId}`, inline: false },
            { name: "Permissions", value: `${client.me.flags}`, inline: true },
            { name: "App Permissions", value: `${client.me.application.flags}`, inline: true },
            { name: "Creation date", value: `${client.me.createdAt}` },
            { name: "Language", value: `[TypeScript](https://www.typescriptlang.org) v5.6.3`, inline: true },
            { name: "Framework", value: `[Seyfert](https://www.seyfert.dev) v2.1.0`, inline: true },
            { name: "Database", value: `[Mondjs](https://snyk.io/advisor/npm-package/mondjs) v1.1.0`, inline: true },
            { name: "Package Manager", value: `[PNPM](https://pnpm.io/es/) v9.12.1` },
            { name: "Avatar made by", value: `DISCORD`, inline: true },
            { name: "Name inspired by", value: `ALSO DISCORD ||Gotta earn the favoritism of discord devs!||`, inline: true }
        ])
            .setFooter({ text: "Invitation link on profile!" })
            .setThumbnail(`${client.me.avatarURL()}`)
            .setColor("Blurple");
        ctx.write({
            embeds: [BotInfoEmbed]
        });
    }
};
BotinfoCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "botinfo",
        description: "Gives you information of the bot."
    })
], BotinfoCommand);
exports.default = BotinfoCommand;
