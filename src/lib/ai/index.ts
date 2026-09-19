import "server-only";

import { createOpenAI } from "@ai-sdk/openai";
import type { LanguageModel } from "ai";

const OPENAI = {
  defaultModel: "Qwen3.6-35B-A3B-NVFP4",
  apiKeyEnv: "OPENAI_API_KEY",
  baseUrlEnv: "OPENAI_BASE_URL",
  create: (apiKey: string, modelId: string, baseUrl: string) =>
    createOpenAI({ apiKey, baseURL: baseUrl })(modelId),
};

export function getModel(): LanguageModel {
  const apiKey = process.env[OPENAI.apiKeyEnv];
  if (!apiKey) {
    throw new Error(
      `Missing API key. Set ${OPENAI.apiKeyEnv} in your environment.`,
    );
  }

  const baseUrl = process.env[OPENAI.baseUrlEnv];
  if (!baseUrl) {
    throw new Error(
      `Missing base URL. Set ${OPENAI.baseUrlEnv} in your environment.`,
    );
  }

  return OPENAI.create(
    apiKey,
    process.env.AI_MODEL?.trim() || OPENAI.defaultModel,
    baseUrl,
  ) as unknown as LanguageModel;
}
