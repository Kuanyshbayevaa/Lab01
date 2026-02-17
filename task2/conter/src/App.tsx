import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ padding: 20 }}>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;