const KEYS = Array.from("abcdefghijklmnopqrstuvwxyz");

export default function HangmanKeyboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map(key => (
        <button key={key}>{key}</button>
      ))}
    </div>
  );
}
