import React, { useEffect, useState } from "react";

const Child2 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`counter becomes ${counter} print a message`);
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>increment</button>
    </div>
  );
};

export default Child2;
