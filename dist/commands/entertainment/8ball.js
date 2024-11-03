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
    question: (0, seyfert_1.createStringOption)({
        description: "The question to reply.",
        required: true
    })
};
let replies = [
    "Not sure about that.",
    "Absolutely yes.",
    "Absolutely no.",
    "Maybe.",
    "You better repeat the question!",
    "Don't dare to ask again.",
    "Why you asking?",
    "The government prevents me to respond to this.",
    "It's way too obvious, is that obvious that I won't reply.",
    "You may want to reflexionate a bit before me to reply that question."
];
let EBallCommand = class EBallCommand extends seyfert_1.Command {
    async run(context) {
        const question = context.options.question;
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        const embed = new seyfert_1.Embed()
            .setTitle("8Ball!")
            .setFields([
            { name: "Question:", value: `${question}` },
            { name: "Reply:", value: `${randomReply}` }
        ])
            .setColor("Random");
        context.write({
            embeds: [embed]
        });
    }
};
EBallCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "8ball",
        description: "Gives you a random response to your question."
    }),
    (0, seyfert_1.Options)(options)
], EBallCommand);
exports.default = EBallCommand;
