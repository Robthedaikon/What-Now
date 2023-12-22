import React, { useState } from "react";
import { fetchRandomPrompt } from "../fetchRandomPrompt";
import { PromptType } from "../constants";

export const RandomPromptSuggestor = () => {
  const [prompt, setPrompt] = useState("");

  const updatePrompt = async (promptType) => {
    let suggestion = await fetchRandomPrompt(promptType);
    while (suggestion.name === prompt) {
      suggestion = await fetchRandomPrompt(promptType);
    }
    setPrompt(suggestion.name);
  };

  return (
    <div className={"RandomPromptSuggestor"}>
      <div>
        <h2>Get a suggestion:</h2>
        <div className={"RandomPromptSuggestorButtonsContainer"}>
          <button onClick={async () => updatePrompt(PromptType.CHARACTER)}>
            Character
          </button>
          <button onClick={async () => updatePrompt(PromptType.EMOTION)}>
            Emotion
          </button>
          <button onClick={async () => updatePrompt(PromptType.LINE)}>
            Line
          </button>
          <button onClick={async () => updatePrompt(PromptType.LOCATION)}>
            Location
          </button>
          <button onClick={async () => updatePrompt(PromptType.RELATIONSHIP)}>
            Relationship
          </button>
        </div>
      </div>
      <h1>{prompt}</h1>
    </div>
  );
};
