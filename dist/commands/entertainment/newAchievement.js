"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const seyfert_1 = require("seyfert");
let options = {
    message: (0, seyfert_1.createStringOption)({
        description: "What did you do?",
        required: true
    })
};
let AchCommand = class AchCommand extends seyfert_1.Command {
    async run(context) {
        let msg = context.options.message;
        const attachment = new seyfert_1.AttachmentBuilder()
            .setName("New achievement!")
            .setDescription("You got an achievement")
            .setFile("url", `https://api.alexflipnote.dev/achievement?text=${msg}`)
            .data;
        context.write({
            attachments: [attachment]
        });
    }
};
AchCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "achievement",
        description: "Creates an image as an achievement of minecraft."
    }),
    (0, seyfert_1.Options)(options)
], AchCommand);
exports.default = AchCommand;
