import { useState } from "react";
import "./App.css";

function App() {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle Highlight
      </button>
    
    <p className={isHighlighted ? "highlight" : ""}>
      This is a paragraph
      </p>
    </div>
  );
}

export default App;
