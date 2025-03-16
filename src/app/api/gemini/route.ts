import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyAszg4eZEujVxc1gMvit02hH0V8xYfFmk8');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const prompt = "Explain how AI works";
        const result = await model.generateContent(prompt);
        const responseText = result.response.text() || "No response";
        console.log(result.response.text() , 'qwerty');

        res.status(200).json({ response: responseText });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Error generating content" });
    }
}




