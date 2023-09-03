import {

    ChannelType,

} from 'discord.js'
export default async (guild) => {
    const imagesChannelCache = await guild.channels.cache.find((c) =>
        c.name
            .toLowerCase()
            .includes('banners')
    )

    if (!imagesChannelCache) return

    const imagesChannel = await imagesChannelCache.fetch()

    if (imagesChannel.type !== ChannelType.GuildText) return

    const messages = await imagesChannel.messages.fetch()

    const message = await messages
        .filter((x) => x.attachments.size || !!x.attachments)
        .random()

    if (!message) return

    const banner = await message.attachments
        .filter((x) => `${x.contentType}`.includes('image'))
        .random()
    return banner
}