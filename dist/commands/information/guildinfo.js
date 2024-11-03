"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const seyfert_1 = require("seyfert");
let GuildinfoCommand = class GuildinfoCommand extends seyfert_1.Command {
    async run(context) {
        const guildc = context.guild();
        const embed = new seyfert_1.Embed()
            .setTitle(`${guildc?.name}'s Information`)
            .setFields([
            { name: "ID", value: `${guildc?.id}`, inline: true },
            { name: "Owner", value: `<@${guildc?.ownerId}>`, inline: true },
            { name: "Created on", value: `${guildc?.createdAt}`, inline: false },
            { name: "Member count", value: `${guildc?.memberCount}`, inline: true },
            { name: "Online", value: `${guildc?.approximatePresenceCount}`, inline: true },
        ])
            .setThumbnail(`${guildc?.iconURL()}`)
            .setColor("Random");
        context.write({
            embeds: [embed]
        });
    }
};
GuildinfoCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "guildinfo",
        description: "Gives you information about the guild."
    })
], GuildinfoCommand);
exports.default = GuildinfoCommand;
