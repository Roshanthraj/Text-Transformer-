# AI Text Transformer

A Next.js + Tailwind app that summarizes, rewrites, and translates text using OpenAI's API.

## Features

- **Summarize** — condense text into key points
- **Rewrite** — adjust tone (Simple, Professional, Friendly, Funny)
- **Translate** — convert text between languages
- Load sample text for quick demos
- Copy output to clipboard

## Tech stack

- Next.js (App Router)
- Tailwind CSS
- OpenAI API

## Getting started

1. Clone the repo and install dependencies:
```bash
   npm install
```

2. Add your OpenAI API key to a `.env.local` file:

OPENAI_API_KEY=your_key_here

3. Run the dev server:
```bash
   npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Deployment

Deployed on Vercel. If deploying your own copy, make sure to add `OPENAI_API_KEY` under Project Settings → Environment Variables (Production, Preview, and Development).
