import React from "react";
import { useDispatch } from "react-redux";

const PlayAgainButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "PLAY_AGAIN" });
  };

  return <button onClick={handleClick}>Play Again</button>;
};

export default PlayAgainButton;
