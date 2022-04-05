import React from "react";
import { withRouter } from "umi";

function Test(props) {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          props.history.push("/page");
        }}
      >
        跳转
      </button>
    </div>
  );
}

export default withRouter(Test);
