const BASE_URL = "http://127.0.0.1:8000";

export const PromptType = {
  LINE: "line",
  CHARACTER: "character",
  LOCATION: "location",
  RELATIONSHIP: "relationship",
  EMOTION: "emotion",
};

export const fetchRandomPrompt = async (promptType) => {
  const response = await fetch(`${BASE_URL}/prompt/${promptType}/random/`, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  const prompt = await response.json();
  return prompt;
};
