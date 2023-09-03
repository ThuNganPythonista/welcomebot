import helloWorldTemplates from './helloWorldTemplates.json' assert { type: "json" };
import { codeBlock } from 'discord.js'
const main = (member) => {
    const template =
        helloWorldTemplates[
        Math.floor(Math.random() * helloWorldTemplates.length)
        ]
    return codeBlock(
        template.lang,
        template.template.replace('${username}', member.displayName)
    )
}
export default main