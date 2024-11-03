import { Declare, Command, type CommandContext } from 'seyfert';

@Declare({
    name: "test",
    description: "Comproves if the commands in the bot, works correctly."
})
export default class PingCommand extends Command {
    async run(ctx: CommandContext) {
        const ping = ctx.client.gateway.latency;

        ctx.write({
            content: `The command works correctly with ${ping} miliseconds of latency.`
        })
    }
}
