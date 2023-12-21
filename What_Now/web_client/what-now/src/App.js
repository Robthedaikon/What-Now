import './App.css';
import {RandomPromptSuggestor} from "./RandomPromptSuggestor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h1>What Now?!</h1>
            <h2>A hot new improvised comedy act based in London</h2>
        </div>
      </header>
        <body>
            <RandomPromptSuggestor />
        </body>
    </div>
  );
}

export default App;
