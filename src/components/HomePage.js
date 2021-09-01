import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [name, setName] = useState("");
  const [size, setSize] = useState(0);
  const [errors, setErrors] = useState({ name: false, size: false });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!(name && size) || errors.name || errors.size) setDisabled(true);
  }, [name, size, errors.name, errors.size]);

  const handlerChangeName = (Name) => {
    setName(string);
    // check, is name valid
  };

  const handlerChangeName = (size) => {
    setSize(Number(size));
    // check, is size correct
  };

  const saveInfoStartGame = () => {};
  return (
    <div className="home-container">
      <div className="head-of-site">
        <h1>
          Hello! Please enter your name and size of field for start the game
        </h1>
      </div>

      <div className="setings-container">
        <div className="gamer-name-field-container input-container">
          <label className="Name">Name:</label>
          <input
            className="gamer-name-input input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => handlerChangeName(e.target.value)}
          />
        </div>
        <div className="field-size-container input-container">
          <label className="field-size-label">Field size:</label>
          <input
            className="field-size-input input"
            type="number"
            min="3"
            max="10"
            placeholder="Enter field size"
            value={size}
            onChange={(e) => {
              handlerChangeSize(e.target.value);
            }}
          />
        </div>
        <div className="button-container">
          <button
            className="start-game"
            disabled={disabled}
            onClick={saveInfoStartGame}
          >
            Start game
          </button>
        </div>
      </div>
    </div>
  );
};
