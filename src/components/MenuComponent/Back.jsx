import React from "react";

import { useHistory } from "react-router-dom";

const Back = () => {
  let history = useHistory();

  function handleClick() {
    history
    .goBack();
  }

  return (
    <button onClick={handleClick} className="backButton">
      <i className="bi bi-chevron-left"></i>
    </button>
  );
};

export default Back;
