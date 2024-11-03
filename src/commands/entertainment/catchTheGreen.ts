import { Declare, Command, Embed, type CommandContext } from "seyfert";
let choices = [
    "🟢", "🟢", "🟢",
    "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡", "🟡",
    "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴",
]

const guess = choices[Math.floor(Math.random() * choices.length)]
const GreenEmbed = new Embed()
    .setTitle("Catch The Green!")
    .setDescription(`And your guess is: ${guess}.\nGood luck!`)
    .setColor("Green");
const YellowEmbed = new Embed()
    .setTitle("Catch The Green!")
    .setDescription(`And your guess is: ${guess}.\Not bad!`)
    .setColor("Yellow");
const RedEmbed = new Embed()
    .setTitle("Catch The Green!")
    .setDescription(`And your guess is: ${guess}.\nBetter luck next time!`)
    .setColor("Red");

@Declare({
    name: "catchthegreen",
    description: "Let's see your luck, there's red, yellow and most rare green."
})
export default class CTGCommand extends Command {
    async run(context: CommandContext) {
        switch (guess) {
            case "🟢":
                context.write({ embeds: [GreenEmbed] })
            case "🟡":
                context.write({ embeds: [YellowEmbed] })
            case "🔴":
                context.write({ embeds: [RedEmbed] })
        }
    }
}