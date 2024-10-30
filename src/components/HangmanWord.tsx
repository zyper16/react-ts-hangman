type hangmanWordType = {
  wordToGuess: string;
  guessedLetters: string[];
};

export default function HangmanWord({
  wordToGuess,
  guessedLetters,
}: hangmanWordType) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6em",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
