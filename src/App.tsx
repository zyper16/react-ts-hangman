import { useCallback, useEffect, useState } from "react";

import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import HangmanKeyboard from "./components/HangmanKeyboard";
import words from "./assets/wordList.json";

function generateRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(generateRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const wrongLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );
  const correctLetters = guessedLetters.filter(letter =>
    wordToGuess.includes(letter)
  );

  const isLooser = wrongLetters.length >= 6;
  const isWinner = [...wordToGuess].every(letter =>
    guessedLetters.includes(letter)
  );
  const isDone = isLooser || isWinner;

  console.log(wordToGuess);
  console.log(wrongLetters);

  const processKeyPress = useCallback(
    (key: string) => {
      if (guessedLetters.includes(key) || isDone) return;

      setGuessedLetters([...guessedLetters, key]);
    },
    [guessedLetters, isDone]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const pressedKey = e.key;
      if (!pressedKey.match(/^[a-z]$/)) return;
      e.preventDefault();
      console.log(pressedKey);

      processKeyPress(pressedKey);
    };

    document.addEventListener("keypress", handler);

    return () => document.removeEventListener("keypress", handler);
  }, [processKeyPress]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div>
        {isLooser ? "You lost!" : ""}
        {isWinner ? "You won!" : ""}
      </div>
      <HangmanDrawing wrongLettersNumber={wrongLetters.length} />
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        gameStatus={isDone}
      />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard
          correctLetters={correctLetters}
          wrongLetters={wrongLetters}
          handleClick={processKeyPress}
          gameStatus={isDone}
        />
      </div>
    </div>
  );
}

export default App;
