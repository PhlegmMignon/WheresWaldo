export default function DuringGame({
  gameImage,
  found,
  setFoundStatus,
  setGameState,
  setTime,
  startTime,
}) {
  return (
    <div>
      <img src={gameImage} alt="" />
    </div>
  );
}
