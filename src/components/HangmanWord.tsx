type hangmanWordType = {
  wordToGuess: string;
  guessedLetters: string[];
  gameStatus: boolean;
};

export default function HangmanWord({
  wordToGuess,
  guessedLetters,
  gameStatus,
}: hangmanWordType) {
  return (
    <div className="word-to-guess">
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || gameStatus
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && gameStatus
                  ? "red"
                  : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
