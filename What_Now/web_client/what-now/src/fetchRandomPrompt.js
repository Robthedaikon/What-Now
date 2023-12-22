import { BASE_URL } from "./constants";

export const fetchRandomPrompt = async (promptType) => {
  const response = await fetch(`${BASE_URL}/prompt/${promptType}/random/`, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  const prompt = await response.json();
  return prompt;
};
