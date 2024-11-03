import gen from '../../plugins/ranid';
import { Declare, Command, Embed, type CommandContext, Options, createStringOption } from 'seyfert';

const options = {
    lenght: createStringOption({
        description: "Put the lenght of the characters for the generation.",
        required: true
    })
}

@Declare({
    name: "generateid",
    description: "Generates a pseudorandom id with customized lenght."
})
@Options(options)
export default class GenerateIdCommand extends Command {
    async run(ctx: CommandContext<typeof options>) {
        let generation = gen(ctx.options.lenght);
        const GenerationIdEmbed = new Embed()
            .setTitle("ID Generation")
            .setDescription(`The generated id is: ${generation}`)
            .setColor("Random");
        
        ctx.write({
            embeds: [GenerationIdEmbed]
        })
    }
}