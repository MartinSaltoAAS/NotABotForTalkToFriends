"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const seyfert_1 = require("seyfert");
let choices = [
    "🟢", "🟢", "🟢",
    "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡",
    "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴",
];
const guess = choices[Math.floor(Math.random() * choices.length)];
const GreenEmbed = new seyfert_1.Embed()
    .setTitle("Catch The Green!")
    .setDescription(`And your guess is: ${guess}.\nGood luck!`)
    .setColor("Green");
const YellowEmbed = new seyfert_1.Embed()
    .setTitle("Catch The Green!")
    .setDescription(`And your guess is: ${guess}.\Not bad!`)
    .setColor("Yellow");
const RedEmbed = new seyfert_1.Embed()
    .setTitle("Catch The Green!")
    .setDescription(`And your guess is: ${guess}.\nBetter luck next time!`)
    .setColor("Red");
let CTGCommand = class CTGCommand extends seyfert_1.Command {
    async run(context) {
        switch (guess) {
            case "🟢":
                context.write({ embeds: [GreenEmbed] });
            case "🟡":
                context.write({ embeds: [YellowEmbed] });
            case "🔴":
                context.write({ embeds: [RedEmbed] });
        }
    }
};
CTGCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "catchthegreen",
        description: "Let's see your luck, there's red, yellow and most rare green."
    })
], CTGCommand);
exports.default = CTGCommand;
