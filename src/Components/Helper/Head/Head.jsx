import React from "react";

function Head(props) {
  React.useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector("meta[name='description']")
      .getAttribute("content", props.decription || "");
  }, [props]);
  return <></>;
}

export default Head;
