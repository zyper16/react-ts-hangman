import "./hangmanStyles.css";
const KEYS = Array.from("abcdefghijklmnopqrstuvwxyz");

type HangmanKeyboardProps = {
  wrongLetters: string[];
  correctLetters: string[];
  handleClick: (key: string) => void;
  gameStatus?: boolean;
};

export default function HangmanKeyboard({
  wrongLetters,
  correctLetters,
  handleClick,
  gameStatus,
}: HangmanKeyboardProps) {
  const keyboard = KEYS.map(key => {
    const isActive = correctLetters.includes(key) ? true : false;
    const isInactive = wrongLetters.includes(key) ? true : false;
    return (
      <button
        className={`btn ${isActive ? "active" : ""} 
                  ${isInactive ? "inactive" : ""}`}
        key={key}
        disabled={isActive || isInactive || gameStatus}
        onClick={() => handleClick(key)}
      >
        {key}
      </button>
    );
  });
  return <div className="keyboard">{keyboard}</div>;
}
