import React from "react";

const LightBox = ({ match, history }) => {
  return (
    <>
      <div className="lightbox__container">
        <div className="top__bar">
          <i
            class="bi bi-x"
            onClick={() => {
              history.goBack();
            }}
          ></i>
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${match.params.vid}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Pops"
        ></iframe>
      </div>
    </>
  );
};

export default LightBox;
