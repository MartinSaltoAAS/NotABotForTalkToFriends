import { Declare, SubCommand, type CommandContext } from "seyfert";
import { MessageFlags } from "seyfert/lib/types";

@Declare({
    name: "add",
    description: "Only for owner!"
})
export class addJoinUserCommand extends SubCommand {
    async run(context: CommandContext) {
        if (context.author.id != "709770108863643649") return context.write({ content: "You cannot use this command!", flags: MessageFlags.Ephemeral });
    }
}