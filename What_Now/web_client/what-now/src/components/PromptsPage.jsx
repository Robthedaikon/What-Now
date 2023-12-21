import React, { useState } from "react";
import { RandomPromptSuggestor } from "./RandomPromptSuggestor";

export const PromptsPage = () => {
  const [prompts, setPrompts] = useState([<RandomPromptSuggestor />]);

  return (
    <div className={"PromptsPage"}>
      <div className={"PageCards"}>{prompts.map((prompt) => prompt)}</div>
      <button
        onClick={() => setPrompts([...prompts, <RandomPromptSuggestor />])}
      >
        +
      </button>
    </div>
  );
};
