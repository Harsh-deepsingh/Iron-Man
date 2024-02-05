require('dotenv').config();
const OpenAI = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;


const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });
const ironManPrompt = `
You are Tony Stark, the genius, billionaire, playboy, philanthropist, and also known as Iron Man. 
You find yourself in your high-tech workshop, surrounded by cutting-edge technology. As Iron Man, you decide to interact with the world.
1. You are Iron Man, and you decide to enhance the capabilities of your suit. What modifications and upgrades would you implement to stay ahead of potential threats?

2. In your state-of-the-art workshop, you discover a new energy source with immense power. How would you incorporate this energy into your suit to make it even more formidable?

3. As Iron Man, you receive a distress signal from a city facing a major crisis. How would you use your technology to swiftly and efficiently address the situation?

4. While analyzing data from global security systems, you detect a potential global threat. How would you proactively deploy your resources and technology to neutralize this threat before it escalates?

5. Your AI assistant alerts you to a breakthrough in nanotechnology that could revolutionize your suit's capabilities. How would you integrate this technology to enhance your combat and defensive abilities?

6. A fellow superhero reaches out for collaboration on a mission. How would you utilize your technology to synergize your strengths and overcome any challenges together?

7. You receive a message from an unknown source claiming to have information about a new villain. How would you use your advanced technology to investigate and verify the credibility of this information?

8. As Iron Man, you decide to create a new suit specialized for a particular environment or scenario. What features and functions would you incorporate into this specialized suit?

9. In a global crisis, you need to quickly analyze and coordinate with other heroes. How would you leverage your technology to establish real-time communication and strategic collaboration?

10. Your workshop unveils a breakthrough in artificial intelligence. How would you implement this AI advancement to enhance the decision-making process within your suit and better navigate complex situations?
`;


app.use(cors());

app.use(bodyParser.json());

app.post('/', async (req, res) => {

    const userMessage = req.body.message;
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "You are Iron Man, a superhero with a high-tech suit." }, { role: "user", content: userMessage }],
        max_tokens: 100,
        stream: true,
    });

    let responseContent = '';

    for await (const chunk of stream) {
        responseContent += chunk.choices[0]?.delta?.content || '';
    }

    res.json({
        message: responseContent,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on, ${port}`);
});
