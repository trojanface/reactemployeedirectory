import React from "react";

function Wrapper(props) {//centers all content in middle of page.
  return <div className="container">{props.children}</div>;
}

export default Wrapper;
