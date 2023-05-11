import React from "react";
import { useSelector } from "react-redux";

const GuessResult = () => {
const numberToGuess = useSelector((state) => state.numberGame.numberToGuess);
const guessed = useSelector((state) => state.numberGame.guessed);
const guessCount = useSelector((state) => state.numberGame.guessCount);
const guessedNumber = useSelector((state) => state.numberGame.guessedNumber);

if (guessed) {
return (
<>
<p>Congratulations, you guessed the number!</p>
<p>It took you {guessCount} guesses.</p>
</>
);
}

if (guessedNumber !== null) {
if (guessedNumber > numberToGuess) {
return <p>Incorrect. Guess lower.</p>;
} else {
return <p>Incorrect. Guess higher.</p>;
}
}

return null;
};

export default GuessResult;