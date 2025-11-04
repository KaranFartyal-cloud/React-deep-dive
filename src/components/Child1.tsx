import React from "react";
import Child2 from "./Child2";

type Props = {
  name: string;
};

const Child1: React.FC<Props> = ({ name }) => {
  console.log("child1 comp has been re rendered");
  return (
    <div>
      <div>{name}</div>
      <div>
        <Child2 />
      </div>
    </div>
  );
};

export default Child1;
