import React, { useState } from "react";
import { RandomPromptSuggestor } from "./RandomPromptSuggestor";
import { PromptType } from "../constants";
import { fetchMatchingPrompts } from "../fetchMatchingPrompts";
import { addPrompt } from "../addPrompt";

const promptTypeRadioButtons = (setPromptType) => {
  const promptTypeRadioButtons = [];
  for (const key in PromptType) {
    promptTypeRadioButtons.push(
      <label>
        <input
          type={"radio"}
          name={"promptType"}
          value={PromptType[key]}
          onChange={(e) => setPromptType(e.target.value)}
        />
        {PromptType[key]}
      </label>,
    );
  }
  return promptTypeRadioButtons;
};

const AddSuggestionModal = ({
  setModalIsOpen,
  value,
  setValue,
  promptType,
  setPromptType,
  matchingPrompts,
  setMatchingPrompts,
}) => {
  const handleInputChange = async (e) => {
    if (!promptType) {
      alert("Please select a prompt type.");
      return;
    }
    e.preventDefault();
    setValue(e.target.value);
    if (promptType && e.target.value.length > 0) {
      const response = await fetchMatchingPrompts(promptType, e.target.value);
      setMatchingPrompts(response.matching_prompts);
    } else {
      setMatchingPrompts([]);
    }
  };
  const handleAddSuggestion = async () => {
    console.log(matchingPrompts);
    if (!promptType) {
      alert("Please select a prompt type.");
      return;
    }
    if (matchingPrompts.includes(value)) {
      alert("This suggestion already exists.");
      return;
    }
    if (promptType && value.length > 0) {
      const response = await addPrompt(promptType, value);
      if (response.status === 200) {
        const matchingPromptsResponse = await fetchMatchingPrompts(
          promptType,
          value,
        );
        setMatchingPrompts(matchingPromptsResponse.matching_prompts);
      }
    }
  };
  const onCloseModal = () => {
    setModalIsOpen(false);
    setPromptType(null);
    setValue("");
    setMatchingPrompts([]);
  };
  return (
    <div className={"AddSuggestionModal"}>
      <div className={"AddSuggestionModalHeader"}>
        <h3>Add your suggestion here</h3>
        <button
          className={"AddSuggestionModal-CloseModalButton"}
          onClick={onCloseModal}
        >
          X
        </button>
      </div>
      <div>
        {promptTypeRadioButtons(setPromptType).map(
          (radioButton) => radioButton,
        )}
        <br />
        <input
          type={"text"}
          placeholder={"Suggestion"}
          value={value}
          onChange={handleInputChange}
        />
        <button
          onClick={handleAddSuggestion}
          disabled={value.length === 0}
          className={
            value.length === 0 ? "AddSuggestionModal-AddButtonDisabled" : ""
          }
        >
          Add
        </button>
        <hr />
        <div className={"ExistingSuggestionsContainer"}>
          <p>Existing Suggestions</p>
          {matchingPrompts.length > 0 && (
            <ul>
              {matchingPrompts.map((prompt) => (
                <li key={prompt}>{prompt}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export const PromptsPage = () => {
  const [prompts, setPrompts] = useState([<RandomPromptSuggestor />]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [promptType, setPromptType] = useState();
  const [matchingPrompts, setMatchingPrompts] = useState([]);

  return (
    <div className={"PromptsPage"}>
      <div className={"PageCards"}>{prompts.map((prompt) => prompt)}</div>
      <button
        onClick={() => setPrompts([...prompts, <RandomPromptSuggestor />])}
      >
        +
      </button>
      {!modalIsOpen ? (
        <button
          className={"OpenAddSuggestionModalButton"}
          onClick={() => setModalIsOpen(true)}
        >
          Add New Suggestion
        </button>
      ) : (
        <AddSuggestionModal
          setModalIsOpen={setModalIsOpen}
          value={value}
          setValue={setValue}
          promptType={promptType}
          setPromptType={setPromptType}
          matchingPrompts={matchingPrompts}
          setMatchingPrompts={setMatchingPrompts}
        />
      )}
    </div>
  );
};
