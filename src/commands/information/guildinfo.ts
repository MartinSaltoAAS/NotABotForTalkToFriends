import { Declare, Command, Embed, type CommandContext } from "seyfert";

@Declare({
    name: "guildinfo",
    description: "Gives you information about the guild."
})
export default class GuildinfoCommand extends Command {
    async run(context: CommandContext) {
        const guildc = context.guild();
        const embed = new Embed()
            .setTitle(`${guildc?.name}'s Information`)
            .setFields([
                {name: "ID", value: `${guildc?.id}`, inline: true},
                {name: "Owner", value: `<@${guildc?.ownerId}>`, inline: true},
                {name: "Created on", value: `${guildc?.createdAt}`, inline: false},
                {name: "Member count", value: `${guildc?.memberCount}`, inline: true},
                {name: "Online", value: `${guildc?.approximatePresenceCount}`, inline: true},
            ])
            .setThumbnail(`${guildc?.iconURL()}`)
            .setColor("Random");

        context.write({
            embeds: [embed]
        })
    }
}