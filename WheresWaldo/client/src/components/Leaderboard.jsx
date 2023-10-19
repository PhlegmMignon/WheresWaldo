export default function Leaderboard({ scores, setGameState }) {
  const convertTime = (time) => {
    let secs = time % 60;
    let mins = Math.trunc(time / 60);

    if (mins == 0) {
      return <div>{secs}secs</div>;
    } else {
      return (
        <div>
          {mins}mins {secs}secs
        </div>
      );
    }
  };

  const updateState = () => {
    setGameState("start");
  };

  return (
    <div
      id="leaderboard"
      className="absolute inset-1/2 flex flex-col gap-3 h-72 w-60 rounded-xl p-6"
    >
      <div className="text-center text-lg ">Leaderboard</div>
      <div className="flex justify-between">
        <p>Name</p> <p className="-ml-8">Time</p>
      </div>
      <ol>
        {scores.map((score) => {
          return (
            <li key={score._id} className="flex justify-between">
              <div>{score.name}</div>
              {convertTime(score.score)}
            </li>
          );
        })}
      </ol>
      <button onClick={updateState} className="text-lg">
        New game
      </button>
    </div>
  );
}
