import React, { useEffect, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const ParentComponent = () => {
  const [name, setName] = useState("");
  const [debouncedName, setDebouncedName] = useState("");
  console.log("parent component has been re rendered");

  // update input value immediately
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // debounce logic inside useEffect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedName(name);
    }, 1000); // wait 1 second after last keystroke

    return () => {
      clearTimeout(handler); // cancel previous timer
    };
  }, [name]);

  return (
    <div>
      <Child1 name={debouncedName} />
      <br />
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name"
      />
      <div>
        <Child2 />
      </div>
    </div>
  );
};

export default React.memo(ParentComponent);
