import React, { useState } from "react";
import Child1 from "./Child1";

const ParentComponent = () => {
  const [name, setName] = useState("");
  console.log("parent component has been re rendered");
  return (
    <div>
      <Child1 name={name} />
      <br></br>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default ParentComponent;
