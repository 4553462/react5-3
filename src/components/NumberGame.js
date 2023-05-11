import React from "react";
import { useSelector } from "react-redux";
import InputNumber from "./InputNumber";
import GuessResult from "./GuessResult";
import PlayAgainButton from "./PlayAgainButton";

const NumberGame = () => {
const guessed = useSelector((state) => state.numberGame.guessed);

return (
<>
<h1>Guess the Number</h1>
<InputNumber />
<GuessResult />
{guessed && <PlayAgainButton />}
</>
);
};

export default NumberGame;