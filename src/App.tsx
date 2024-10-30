import { useEffect, useState } from "react";

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

  console.log(wordToGuess);
  console.log(wrongLetters);
  const processKeyPress = function (key: string) {
    if (guessedLetters.includes(key)) return;
    setGuessedLetters([...guessedLetters, key]);
  };

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
  });

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
      <div>Win Lose</div>
      <HangmanDrawing wrongLettersNumber={wrongLetters.length} />
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard />
      </div>
    </div>
  );
}

export default App;
