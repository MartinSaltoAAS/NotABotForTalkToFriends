import { Declare, Command, Embed, type CommandContext } from "seyfert";

@Declare({
    name: "botinfo",
    description: "Gives you information of the bot."
})
export default class BotinfoCommand extends Command {
    async run(ctx: CommandContext) {
        const client = ctx.client;
        const BotInfoEmbed = new Embed()
            .setTitle("Bot Information")
            .setFields([
                {name: "ID", value: `${client.botId}`, inline: false},
                {name: "Permissions", value: `${client.me.flags}`, inline: true},
                {name: "App Permissions", value: `${client.me.application.flags}`, inline: true},
                {name: "Creation date", value: `${client.me.createdAt}`},
                {name: "Language", value: `[TypeScript](https://www.typescriptlang.org) v5.6.3`, inline: true},
                {name: "Framework", value: `[Seyfert](https://www.seyfert.dev) v2.1.0`, inline: true},
                {name: "Database", value: `[Mondjs](https://snyk.io/advisor/npm-package/mondjs) v1.1.0`, inline: true},
                {name: "Package Manager", value: `[PNPM](https://pnpm.io/es/) v9.12.1`},
                {name: "Avatar made by", value: `DISCORD`, inline: true},
                {name: "Name inspired by", value: `ALSO DISCORD ||Gotta earn the favoritism of discord devs!||`, inline: true}
            ])
            .setFooter({ text: "Invitation link on profile!" })
            .setThumbnail(`${client.me.avatarURL()}`)
            .setColor("Blurple");

        ctx.write({
            embeds: [BotInfoEmbed]
        })
    }
}