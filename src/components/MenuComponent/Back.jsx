import React from "react";

import { useHistory } from "react-router-dom";

const Back = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }
  return (
    <button onClick={handleClick}>
      <i class="bi bi-chevron-left"></i>
    </button>
  );
};

export default Back;
