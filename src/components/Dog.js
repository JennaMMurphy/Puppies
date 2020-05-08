import React, { useState } from "react";

function Dogs({ dogs }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="dogs">
      <div className="dogs__name">
        <p>{dogs.name}</p>
      </div>
      <div className="dogs__meta">
        <span>{dogs.breed}</span>
      </div>
      <div
        className="dogs__image "
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img src={dogs.imageUrl} alt="Image not available" />
        {isShown && (
          <div className="dogs__mouseover">
            <h1 className="imageText">{dogs.description}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dogs;
