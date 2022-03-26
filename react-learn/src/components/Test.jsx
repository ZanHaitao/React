import React, { useContext } from "react";
const ctx = React.createContext();

function TestContext(props) {
  const value = useContext(ctx);
  return <h1>上下文：{value}</h1>;
}

export default function Test() {
  return (
    <div>
      <ctx.Provider value={"abc"}>
        <TestContext />
      </ctx.Provider>
    </div>
  );
}
