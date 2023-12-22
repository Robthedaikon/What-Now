import { BASE_URL } from "./constants";

export const addPrompt = async (promptType, prompt) => {
  const response = await fetch(`${BASE_URL}/prompt/create/`, {
    method: "POST",
    body: JSON.stringify({ value: prompt, prompt_type: promptType }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
  const newPrompt = await response.json();
  return newPrompt;
};
