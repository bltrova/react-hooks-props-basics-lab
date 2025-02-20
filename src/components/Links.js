import React from "react";

function Links(props) {
 const {github, linkedin} = props;

  return (
    <>
        <h3>Links</h3>
        <a href={ github }>{github}</a>
        <a href={ linkedin }>{linkedin}</a>
    </>
  );
}

export default Links;
