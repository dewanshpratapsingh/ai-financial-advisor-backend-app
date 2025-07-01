import { GoogleGenAI } from '@google/genai';

async function geminiClient(salary, age, investment, location, risk,emi) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.5-pro-preview-05-06';
  const prompt = `Act as a financial expert. Provide personalized investment and financial suggestions for an individual based in India using the following query parameters from the request: age : ${age},salary: ${salary},investments : ${investment},location: ${location},expenediture: ${emi} and risk : ${risk} .risk is financial risk taking capacity, maximum risk is 5 and minimum risk is 0. Format the response as a strict JSON object with the following keys: - overall_advice: A brief summary of the individual's financial situation and a general direction based on their risk appetite and age. - suggestions: An array of actionable steps. Each item should have a title and a description explaining the suggestion. - cautions: An array of financial warnings or common mistakes to avoid. Each item should include a title and a description. Use the risk value to tailor the suggestions (e.g., low, medium, high). Ensure that the response is in strict JSON format only—no additional text, markdown, or commentary outside the JSON object.`;

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  console.log("Got response from Gemini AI");
  let fullResponse = '';
  for await (const chunk of response) {
    fullResponse += chunk.text;
  }
  console.log("Full response received from Gemini AI");
  const startPattern = "```json";
  const endPattern = "```";
  if (fullResponse.startsWith(startPattern) && fullResponse.endsWith(endPattern)) {
    fullResponse = fullResponse.slice(startPattern.length, -endPattern.length);
  }
  fullResponse = JSON.parse(fullResponse);
  return fullResponse;
}

export default geminiClient;
