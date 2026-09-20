# Ninja Coach

Ninja Coach is an AI-powered Top Performance Coach designed to help you build high-performance habits, hold you accountable, and manage your goals and daily tasks.

## Features

- **AI Coaching Persona**: A direct, challenging, yet supportive AI coach that helps you stay on track, asks insightful questions, and proactively checks in on your progress.
- **Goal & Todo Management**: Create, update, and complete long-term goals and concrete next actions (todos) directly through conversations with the coach.
- **Structured Check-ins**:
  - **Weekly Check-ins**: Review the past week's progress, assess current goals, and set commitments for the upcoming week.
  - **Daily Check-ins**: Review recent wins, lock in commitments for the day's active todos, and overcome blockers.
- **Session Memory**: The coach retrieves past conversations to provide contextual and personalized guidance based on your history.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An OpenAI-compatible API endpoint (e.g., standard OpenAI API, or local LLMs via Ollama, vLLM).

### Setup Instructions

1. **Install dependencies**:

   ```bash
   npm install
   # or yarn install, pnpm install, bun install
   ```

2. **Configure Environment Variables**:

   Copy the provided `.env.example` file to a new `.env.local` (or `.env`) file:

   ```bash
   cp .env.example .env.local
   ```

   Open `.env.local` and update the environment variables to match your LLM provider:
   - `OPENAI_BASE_URL`: The base URL of your OpenAI-compatible API endpoint (e.g., `http://localhost:11434/v1`).
   - `OPENAI_API_KEY`: The API key for the endpoint (can be a dummy string for local endpoints).
   - `AI_MODEL`: (Optional) The specific model you want to use.

3. **Run the development server**:

   ```bash
   npm run dev
   # or yarn dev, pnpm dev, bun dev
   ```

4. **Open the app**:

   Open [http://localhost:3000](http://localhost:3000) with your browser to start your coaching sessions!
