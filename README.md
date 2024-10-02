# Importing templates and generating a message based on a random template by Javascript

Welcomebot is a bot designed to generate 29 different 'Hello World' greetings from various knowledgeable fields in programming.

**1)GenerateHelloworld**

`import helloWorldTemplates from './helloWorldTemplates.js'`
=> We import 29 `helloWorld` greetings that we wrote in the file `helloWorld`

`import { codeBlock } from 'discord.js'`
=> We import the codeBlock function from the 'discord.js' library.

`const main = (member) => {...}`
=> We declares a function named main that takes a parameter member.

```python  
const template =
        helloWorldTemplates[
        Math.floor(Math.random() * helloWorldTemplates.length)
        ]
```

=> We randomly select a template from the imported `helloWorldTemplates` array.

```python
    return codeBlock(
        template.lang,
        template.template.replace('${username}', member.displayName)
    )
```
=> This returns a string generated using the codeBlock function from `discord.js`. It replaces `${username}` in the template with the displayName property of the member parameter.


**2) GetRandomBanner:**

This file is an event handler function written in JavaScript, possibly for a Discord bot using the Discord.js library

**Import Statement:**

```python
import {
    ChannelType,
} from 'discord.js'
```

This imports the **ChannelTyp** from the `discord.js` library.

**Exported Function:**

```python
export default async (guild) => {
    // Function Body
}
```
This is an asynchronous function that takes a guild as a parameter. 
It is likely an event handler for a Discord bot that gets triggered when a **guild** (server) event occurs.

**Fetching Images Channel:**

```python
const imagesChannelCache = await guild.channels.cache.find((c) =>
    c.name
        .toLowerCase()
        .includes('banners')
)
```

This searches for a channel in the guild's cache with a name containing **'banners'** (case-insensitive). It seems to be looking for a specific type of channel, possibly for storing banners or images.

**Checking Channel Type:**

```python
if (imagesChannel.type !== ChannelType.GuildText) return
```

It checks if the found channel is a text channel. If it's not, the function returns, indicating that it expects the 'banners' channel to be a text channel.

**Fetching Messages in the Channel:**

```python
const messages = await imagesChannel.messages.fetch()
```

It fetches all the messages in the 'banners' channel.

**Selecting a Random Message with Attachments:**

```python
const message = await messages
    .filter((x) => x.attachments.size || !!x.attachments)
    .random()
```

It filters messages to select ones with attachments and then randomly selects one of those messages.

**Selecting a Random Attachment from the Message:**

It filters attachments to select ones with content type 'image' and then randomly selects one of those attachments.

**Returning the Chosen Banner:**

`return banner`


**3) HelloWorldTemplates:**

This appears to be an array of objects, each containing a programming language (lang) and a corresponding code template (template). The templates seem to be simple "Hello World" programs tailored for different programming languages, and they include a placeholder `${username}` which can be replaced with an actual username.

**C :**


`printf("Hello World ${username}!");`

**Python:**

`print("Hello World ${username}")`

**JavaScript:**

`console.log("Hello World ${username}!");`

**Java:**

`System.out.println("Hello World ${username}!");`

**HTML:**

`<h1>Hello World ${username}!</h1>`

**SQL:**

`SELECT user FROM Mely WHERE greeting = "Hello World ${username}!";`

**CSS:**

```python
body:before {
    content: 'Hello World ${username}';
}

```




We can use these templates to generate "Hello World" programs in different programming languages with a personalized greeting for a given username.


**4) index:**


**Discord Bot Initialize:**

```
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});
```

+ It initializes a Discord bot using the Client class from the Discord.js library.
  
+ The bot is configured with certain gateway intents for guilds, guild messages, message content, and guild members.

**Event Handling:**

```
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});
```

+ The bot listens for the 'ready' event, logging information when it successfully connects to Discord.
+ It also listens for the 'interactionCreate' event, which handles chat input commands.

**Command Handling:**

```
   if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
```

The bot has a basic 'ping' command that replies with 'Pong!' when invoked.


**Guild Member Welcome:**

```
client.on('guildMemberAdd', async member => {
    const { guild } = member;
```

=> The bot listens for the 'guildMemberAdd' event, triggered when a new member joins a guild (server).


```
  const generalChat = await guild.channels.cache.find((c) =>
        c.name.toLowerCase().includes('gossip')
    )
```

=> It fetches channels named 'gossip' and 'rule' in the guild.

```
   const rule = await guild.channels.cache.find((c) =>
        c.name.toLowerCase().includes('rule')
    )
```


=> It creates a row of buttons (links) for reading rules and joining the general chat.


```
  const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setURL(`${rule.url}`)
            .setLabel('Go through the rules!'),
        new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setURL(`${generalChat.url}`)
            .setLabel('Let's gossip with us!')
    )
```

It generates a welcome embed message with a random banner, a personalized greeting, and user information..


```
 const banner = await getRandomBanner(guild);
    const welcomeEmbed = new EmbedBuilder()
        .setColor('Random')
        .setTitle(
            `Welcome ${member.displayName} to ${guild.name} universe!`
        )
        .setDescription(generateHelloworld(member))
        .setThumbnail(member.displayAvatarURL())
        .setImage(banner.url)

    member.guild.channels.cache.find(i => i.name.includes('greeting')).send({ content: `${member}`, embeds: [welcomeEmbed], components: [row] })
})
```

=> The bot sends the welcome message to a channel named 'greeting' in the guild.

**Express Web Server:**

```
import express from 'express'
const app = express()
const port = process.env.PORT||3000
```


=> The bot also initializes an Express web server that listens on a specified port (default is 3000).


```
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

The server responds with 'Hello World!' for requests to the root endpoint.


```
client.login(process.env.TOKEN);
```

The bot logs in using the provided Discord bot token from the environment variables.




