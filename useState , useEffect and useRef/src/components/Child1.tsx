import { useEffect } from "react";
import Child2 from "./Child2";
import { Link } from "react-router-dom";

const Child1 = () => {
  useEffect(() => {
    console.log(
      "this message will be printed the second Child1.tsx gets rendered"
    );

    return () => {
      console.log(
        "this message will be printed when Child1.tsx gets removed from the DOM"
      );
    };
  }, []);

  return (
    <div>
      Child1
      <Link to={"/2"}>child2</Link>
    </div>
  );
};

export default Child1;
