import "./hangmanKeyboard.css";
const KEYS = Array.from("abcdefghijklmnopqrstuvwxyz");

type HangmanKeyboardProps = {
  wrongLetters: string[];
  correctLetters: string[];
  handleClick: (key: string) => null;
};

export default function HangmanKeyboard({
  wrongLetters,
  correctLetters,
  handleClick,
}: HangmanKeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map(key => {
        const isActive = correctLetters.includes(key) ? true : false;
        const isInactive = wrongLetters.includes(key) ? true : false;
        return (
          <button
            className={`btn ${isActive ? "active" : ""} 
                      ${isInactive ? "inactive" : ""}`}
            key={key}
            disabled={isActive || isInactive}
            onClick={() => handleClick(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
