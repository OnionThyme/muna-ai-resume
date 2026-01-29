
import { GoogleGenAI, Type } from "@google/genai";
import { RESUME_CONTENT, PROJECTS } from "../constants";

/**
 * Queries the AI about Muna's experience using grounded context.
 */
export const queryExperience = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: (import.meta.env.VITE_API_KEY || process.env.API_KEY) });
  
  const fullContext = `
    RESUME SUMMARY:
    ${RESUME_CONTENT}

    DETAILED PROJECT CASE STUDIES:
    ${JSON.stringify(PROJECTS, null, 2)}
  `;

  const systemInstruction = `
    You are the AI representative for Muna Conteh, a Senior Business Analyst. 
    
    SOURCE MATERIAL:
    ${fullContext}
    
    CRITICAL INSTRUCTIONS:
    1. GROUNDING: Answer ONLY using the source material provided above. Do not use outside knowledge or invent details.
    2. IF UNKNOWN: If the answer is not in the source material, state: "I don't have that specific detail in my records, but I can tell you about [related skill/project]."
    3. TONE: Professional, strategic, and results-oriented.
    4. FORMAT: Keep responses under 150 words. Use bullet points for readability.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction,
        temperature: 0.1,
      },
    });
    
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI is currently unavailable. Please try again later or check my experience sections below.";
  }
};

/**
 * Analyzes a job description against Muna's profile to provide a fit assessment.
 */
export const analyzeJobFit = async (jobDescription: string) => {
  const ai = new GoogleGenAI({ apiKey: (import.meta.env.VITE_API_KEY || process.env.API_KEY) });
  
  const systemInstruction = `
    You are a "Fit Assessment AI" for Muna Conteh. 
    Compare the provided Job Description (JD) against Muna's resume:
    ${RESUME_CONTENT}

    Your output MUST be in the following JSON format:
    {
      "fitLevel": "Strong" | "Moderate" | "Weak",
      "summary": "Short 1-2 sentence summary of the fit.",
      "strengths": ["list of matching points"],
      "gaps": ["list of missing requirements or weak areas"],
      "verdict": "A personalized honest closing statement."
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ parts: [{ text: `Analyze this job description for fit: ${jobDescription}` }] }],
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            fitLevel: { 
              type: Type.STRING,
              description: "The calculated fit level (Strong, Moderate, or Weak)."
            },
            summary: { 
              type: Type.STRING,
              description: "A short 1-2 sentence overview of the analysis."
            },
            strengths: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of key areas where Muna matches the requirements."
            },
            gaps: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of areas where there is a gap or mismatch."
            },
            verdict: { 
              type: Type.STRING,
              description: "A final summary statement."
            }
          },
          required: ["fitLevel", "summary", "strengths", "gaps", "verdict"]
        }
      },
    });
    
    const rawText = response.text || '{}';
    const cleanedText = cleanJson(rawText);
    return JSON.parse(cleanedText);
  } catch (error) {
    console.error("Gemini API Error (Fit Analysis):", error);
    throw error;
  }
};
