import OpenAI from "openai";

function buildInstructions(mode, target, tone) {
    const base = "You are a helpful writing assistant. Be clear, concise, and your responses should be easily reusable. Do not add commentary.";
    if (mode === "summarize") {
        return `${base} Summarize the given text into maximum of 5 points`;
    } else if (mode === "rewrite") {
        return `${base} Rewrite the given text into a ${tone ? tone : "simple"} tone. You should preserve the meaning.`;
    } else {
        return `${base} Translate the given statements to ${target}. Do not change the names or products mentioned.`;
    }
}

export async function POST(req) {
    try {
        const { input, mode, tone, target } = await req.json();
        const cleanedInput = input ? input.trim() : "";

        if (!cleanedInput) {
            return Response.json({ error: "Text required" }, { status: 400 });
        }

        const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const aiResponse = await client.responses.create({
            model: 'gpt-5.4-mini',
            instructions: buildInstructions(mode, target, tone),
            input: cleanedInput
        });

        return Response.json({ output: aiResponse.output_text || "" });
    }
    catch (err) {
        console.error(err);
        return Response.json({ error: "server error" }, { status: 500 });
    }
}