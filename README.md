# Importing templates and generating a message based on a random template by Javascript

Welcomebot is a bot designed to generate 29 different 'Hello World' greetings from various knowledgeable fields in programming.

**1)generateHelloworld**

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
