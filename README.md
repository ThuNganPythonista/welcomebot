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
