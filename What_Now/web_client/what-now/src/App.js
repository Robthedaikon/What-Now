import "./App.css";
import { useState } from "react";
import { PromptsPage } from "./components/PromptsPage";
import { HomePage } from "./components/HomePage";

const Tabs = {
  HOME: "Home",
  PROMPTS: "Prompts",
};

function App() {
  const [activeTab, setActiveTab] = useState(Tabs.HOME);
  const renderActiveTab = () => {
    switch (activeTab) {
      case Tabs.HOME:
        return <HomePage />;
      case Tabs.PROMPTS:
        return <PromptsPage />;
      default:
        return <HomePage />;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-tabs">
          <button
            className={
              activeTab === Tabs.HOME
                ? "App-header-tab Active-tab"
                : "App-header-tab"
            }
            onClick={() => setActiveTab(Tabs.HOME)}
          >
            Home
          </button>
          <button
            className={
              activeTab === Tabs.PROMPTS
                ? "App-header-tab Active-tab"
                : "App-header-tab"
            }
            onClick={() => setActiveTab(Tabs.PROMPTS)}
          >
            Improv Prompts
          </button>
        </div>
        <h1 className="Page-title">What Now?!</h1>
      </header>
      <body>{renderActiveTab()}</body>
    </div>
  );
}

export default App;
