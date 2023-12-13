import openai from 'openai'
import fs from 'fs'
import { Axios } from 'axios'

async function abc() {

    const ai = new openai({
        "apiKey": fs.readFileSync('key', { encoding: "utf8" })
    })
    const test = await ai.chat.completions.create({
        "messages": [
            {
                "content": "Tell me how to print hello world in c"
            }
        ],
        "model": "gpt-3.5-turbo"
    })
    console.log(test.choices[0])
}
abc()