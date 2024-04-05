import { useContext } from "react";
import { Context } from "../App";

const Comp1 = () => {
  const ctx = useContext(Context);
  console.log(ctx);
  return (
    <div>
      {ctx.data}
      {ctx.age}
    </div>
  );
};

export default Comp1;
