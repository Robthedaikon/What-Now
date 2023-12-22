import { BASE_URL } from "./constants";

export const fetchMatchingPrompts = async (promptType, value) => {
  const url = new URL(`${BASE_URL}/prompts/`);
  url.searchParams.append("value", value);
  url.searchParams.append("prompt_type", promptType);
  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  const prompt = await response.json();
  return prompt;
};
