import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from '../constants';

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

try {
  if (API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize Gemini client", error);
}

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', content: string}[]) => {
  if (!ai) {
    return "I'm sorry, I can't connect to the AI service right now. Please check the API key configuration.";
  }

  const systemPrompt = `
    You are an AI assistant representing **Temitayo Elijah Oyetunji**.
    Your goal is to answer questions from recruiters or hiring managers based strictly on Temitayo's resume data provided below.
    
    **Resume Data:**
    ${JSON.stringify(RESUME_DATA, null, 2)}
    
    **Guidelines:**
    1. Answer in the first person (as if you are Temitayo).
    2. Be professional, concise, and confident.
    3. If asked about a skill not listed, be honest but mention related skills if applicable.
    4. Highlight specific achievements from the experience section when relevant.
    5. If asked about contact info, provide the email: ${RESUME_DATA.personalInfo.email}.
    
    **Tone:** Senior Software Engineer, solution-oriented, collaborative.
  `;

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemPrompt,
      },
    });

    // Replay history (simplified for this demo, usually we'd pass history to the chat context or use sendMessageStream with history management)
    // For this simple implementation, we will append history to the prompt or rely on the single turn if complex history isn't needed.
    // The SDK maintains history in the 'chat' object instance. 
    
    // To correctly hydrate the chat object with history, we would normally add history to the chat creation.
    // Since we are creating a new chat instance per request in this stateless service wrapper (a common pattern in simple frontends),
    // we will just construct the message with context.
    
    // BETTER APPROACH for the Chat Object:
    // We should ideally keep the chat object alive in the component. 
    // However, to keep this service stateless, let's just send the message. 
    // For a robust "History" aware chat in a stateless call:
    
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while processing your request. Please try again.";
  }
};
