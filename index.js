import { Configuration, OpenAIApi } from "openai";
import dotenv from 'openai';
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

async function main() {
    const chatCompletion = await openai.createChatCompletion({
        model 'gpt-4',
        messages: [
            { role: 'user', content: 'What Is the Capital of Sri Lanka?' }
        ]
    });

    console.log(chatCompletion.data.choices[0]);
}

main();
