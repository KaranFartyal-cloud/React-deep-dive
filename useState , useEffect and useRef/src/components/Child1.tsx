import React from "react";
import Child2 from "./Child2";

type Props = {
  count: number;
};

const Child1: React.FC<Props> = ({ count }) => {
  console.log("child1 has been re rendered");
  return (
    <div>
      {count}
      <Child2 />
    </div>
  );
};

export default Child1;
