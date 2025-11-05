import { useEffect, useState } from "react";

import "./App.css";
import Child1 from "./components/Child1";

function App() {
  const [count, setCount] = useState(0);

 

  return (
    <div>
      <Child1 count={count} />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increment
      </button>


      
    </div>
  );
}

export default App;
