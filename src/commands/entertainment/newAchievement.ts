import { Declare, Command, type CommandContext, Options, createStringOption, AttachmentBuilder } from "seyfert";
let options = {
    message: createStringOption({
        description: "What did you do?",
        required: true
    })
}


@Declare({
    name: "achievement",
    description: "Creates an image as an achievement of minecraft."
})
@Options(options)
export default class AchCommand extends Command {
    async run(context: CommandContext<typeof options>) {
        let msg = context.options.message;
        const attachment = new AttachmentBuilder()
            .setName("New achievement!")
            .setDescription("You got an achievement")
            .setFile("url", `https://api.alexflipnote.dev/achievement?text=${msg}`)

        context.write({
            attachments: [attachment]
        })
    }
}