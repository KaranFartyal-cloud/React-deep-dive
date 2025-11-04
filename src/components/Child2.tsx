import React from "react";

const Child2 = () => {
  console.log("child 2 comp has been re rendered");
  return <div>Child2</div>;
};

export default React.memo(Child2);
