const initialState = {
    numberToGuess: Math.floor(Math.random() * 101),
    guessed: false,
    guessCount: 0,
  };
  
  const numberGameReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GUESS_NUMBER":
        const { guessedNumber } = action.payload;
        const isCorrect = guessedNumber === state.numberToGuess;
        return {
          ...state,
          guessed: isCorrect,
          guessCount: state.guessCount + 1,
        };
      case "PLAY_AGAIN":
        return {
          ...initialState,
          numberToGuess: Math.floor(Math.random() * 101),
        };
      default:
        return state;
    }
  };
  
  export default numberGameReducer;
  