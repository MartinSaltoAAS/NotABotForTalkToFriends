"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ranid_1 = __importDefault(require("../../plugins/ranid"));
const seyfert_1 = require("seyfert");
const options = {
    lenght: (0, seyfert_1.createStringOption)({
        description: "Put the lenght of the characters for the generation.",
        required: true
    })
};
let GenerateIdCommand = class GenerateIdCommand extends seyfert_1.Command {
    async run(ctx) {
        let generation = (0, ranid_1.default)(ctx.options.lenght);
        const GenerationIdEmbed = new seyfert_1.Embed()
            .setTitle("ID Generation")
            .setDescription(`The generated id is: ${generation}`)
            .setColor("Random");
        ctx.write({
            embeds: [GenerationIdEmbed]
        });
    }
};
GenerateIdCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "generateid",
        description: "Generates a pseudorandom id with customized lenght."
    }),
    (0, seyfert_1.Options)(options)
], GenerateIdCommand);
exports.default = GenerateIdCommand;
