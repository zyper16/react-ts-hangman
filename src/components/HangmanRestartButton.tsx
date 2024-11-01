import "./hangmanStyles.css";

type HangmanRestartButtonProps = {
  handleRestartButton: () => void;
};

export default function HangmanRestartButton({
  handleRestartButton,
}: HangmanRestartButtonProps) {
  return (
    <button className="restart-button" onClick={handleRestartButton}>
      Restart
    </button>
  );
}
