"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const seyfert_1 = require("seyfert");
const options = {
    user: (0, seyfert_1.createUserOption)({
        description: "You can choose an user you want to have info of",
        required: false
    })
};
let UserinfoCommand = class UserinfoCommand extends seyfert_1.Command {
    async run(ctx) {
        const user = ctx.options.user || ctx.author;
        const UserInfoEmbed = new seyfert_1.Embed()
            .setTitle(`Userinfo`)
            .setFields([
            { name: "Username", value: `${user.username}`, inline: true },
            { name: "Global Name", value: `${user.globalName}`, inline: true },
            { name: "ID", value: `${user.id}`, inline: false },
            { name: "Created on", value: `${user.createdAt}`, inline: false },
        ])
            .setThumbnail(`${user.avatarURL()}`)
            .setColor("Random");
        ctx.write({
            embeds: [UserInfoEmbed]
        });
    }
};
UserinfoCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "userinfo",
        description: "Gives you the information of a user in the guild."
    }),
    (0, seyfert_1.Options)(options)
], UserinfoCommand);
exports.default = UserinfoCommand;
