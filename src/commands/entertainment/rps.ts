import { Declare, Command, type CommandContext, createIntegerOption, Options } from "seyfert";

let options = {
    choose: createIntegerOption({
        choices: [
            {name: "Rock", value: 1},
            {name: "Paper", value: 2},
            {name: "Scissors", value: 3}
        ],
        description: "Chosse one of these options."
    })
}

@Declare({
    name: "rps",
    description: "Rock paper scissors."
})
@Options(options)
export default class RPSCommand extends Command {
    async run(context: CommandContext<typeof options>) {
        context.write({content: "En progeso."})
    }
}