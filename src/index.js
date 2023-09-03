import { Client, EmbedBuilder, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import generateHelloworld from './generateHelloworld.js';
import dotenv from 'dotenv';
import getRandomBanner from './getRandomBanner.js';
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});
client.on('guildMemberAdd', async member => {
    const { guild } = member;
    const generalChat = await guild.channels.cache.find((c) =>
        c.name.toLowerCase().includes('gossip')
    )
    const rule = await guild.channels.cache.find((c) =>
        c.name.toLowerCase().includes('rule')
    )
    const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setURL(`${rule.url}`)
            .setLabel('Đọc luật đã nào!'),
        new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setURL(`${generalChat.url}`)
            .setLabel('Cùng tám thôi!')
    )

    const banner = await getRandomBanner(guild);
    const welcomeEmbed = new EmbedBuilder()
        .setColor('Random')
        .setTitle(
            `Chào mừng ${member.displayName} đã đến với vũ trụ ${guild.name}!`
        )
        .setDescription(generateHelloworld(member))
        .setThumbnail(member.displayAvatarURL())
        .setImage(banner.url)

    member.guild.channels.cache.find(i => i.name.includes('greeting')).send({ content: `${member}`, embeds: [welcomeEmbed], components: [row] })
})
import express from 'express'
const app = express()
const port = process.env.PORT||3000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



client.login(process.env.TOKEN);