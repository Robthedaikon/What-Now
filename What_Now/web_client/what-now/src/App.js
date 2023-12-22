import "./App.css";
import { useState } from "react";
import { PromptsPage } from "./components/PromptsPage";
import { HomePage } from "./components/HomePage";
import { ContactPage } from "./components/ContactPage";

const Tabs = {
  HOME: "Home",
  CONTACT: "Contact us",
  PROMPTS: "Improv Prompts",
};

function App() {
  const [activeTab, setActiveTab] = useState(Tabs.HOME);
  const renderActiveTab = () => {
    switch (activeTab) {
      case Tabs.HOME:
        return <HomePage />;
      case Tabs.PROMPTS:
        return <PromptsPage />;
      case Tabs.CONTACT:
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };
  const orderedTabs = [Tabs.HOME, Tabs.PROMPTS, Tabs.CONTACT];
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Page-title">What Now?!</h1>
        <div className="App-header-tabs">
          {orderedTabs.map((tab) => {
            return (
              <button
                className={
                  activeTab === tab
                    ? "App-header-tab Active-tab"
                    : "App-header-tab"
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </header>
      <body>{renderActiveTab()}</body>
    </div>
  );
}

export default App;
