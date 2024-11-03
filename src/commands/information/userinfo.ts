import { Declare, Options, Command, Embed, type CommandContext, createUserOption } from "seyfert";
const options = {
    user: createUserOption({
        description: "You can choose an user you want to have info of",
        required: false
    })
}

@Declare({
    name: "userinfo",
    description: "Gives you the information of a user in the guild."
})
@Options(options)
export default class UserinfoCommand extends Command {
    async run(ctx: CommandContext<typeof options>) {
        const user = ctx.options.user || ctx.author;
        const UserInfoEmbed = new Embed()
            .setTitle(`Userinfo`)
            .setFields([
                {name: "Username", value: `${user.username}`, inline: true},
                {name: "Global Name", value: `${user.globalName}`, inline: true},
                {name: "ID", value: `${user.id}`, inline: false},
                {name: "Created on", value: `${user.createdAt}`, inline: false},
            ])
            .setThumbnail(`${user.avatarURL()}`)
            .setColor("Random");

        ctx.write({
            embeds: [UserInfoEmbed]
        })
    }
}