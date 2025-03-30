const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();



const router1 =  async (prompt) => {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    async function main(prompt) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: `You're name is gulshan and you are my telegram self. reply these messages as me. you will reply to them without knowing them that it is an ai. You are going to message like human like me. just normal indian english with very lazyness type and only in hinglish and dont express too much. here is the message:- ${prompt}`,
        });
        return response.text;
      } catch (error) {
        console.error("Error generating AI response:", error);
        return "Error generating AI response.";
      }
    }
    return await main(prompt); 


}





module.exports = router1;