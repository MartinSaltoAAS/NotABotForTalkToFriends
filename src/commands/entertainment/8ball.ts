import { Declare, Command, createStringOption, Embed, type CommandContext, Options } from "seyfert";
const options = {
    question: createStringOption({
        description: "The question to reply.",
        required: true
    })
}
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
]

@Declare({
    name: "8ball",
    description: "Gives you a random response to your question."
})
@Options(options)
export default class EBallCommand extends Command {
    async run(context: CommandContext<typeof options>) {
        const question = context.options.question;
        const randomReply = replies[Math.floor(Math.random() * replies.length)]
        const embed = new Embed()
            .setTitle("8Ball!")
            .setFields([
                {name: "Question:", value: `${question}`},
                {name: "Reply:", value: `${randomReply}`}
            ])
            .setColor("Random");

        context.write({
            embeds: [embed]
        })
    }
}