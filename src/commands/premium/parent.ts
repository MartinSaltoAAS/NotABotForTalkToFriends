import { Declare, Command, Options } from "seyfert";
import { addJoinUserCommand } from "./addPremiumUser";

@Declare({
    name: "premium",
    description: "Is the parent command of premium subcommands."
})
@Options([addJoinUserCommand])
export default class PremiumCommand extends Command {}