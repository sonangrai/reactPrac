import React from "react";

const Add = ({ match }) => {
  console.log(match.params);

  const mystyle = {
    backgroundColor: `#${match.params.vid}`,
    color: "#fff",
  };

  return (
    <section className="screen" style={mystyle}>
      <h2>Add whaw</h2>
    </section>
  );
};

export default Add;
