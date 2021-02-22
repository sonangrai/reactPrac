import React from "react";

const LightBox = ({ link }) => {
  return (
    <>
      <div className="lightbox__container">
        <div className="top__bar">
          <i class="bi bi-x"></i>
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${link}`}
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
