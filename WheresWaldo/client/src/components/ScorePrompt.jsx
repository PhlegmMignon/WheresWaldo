import { useState } from "react";

export default function ScorePrompt({
  setIsHighscore,
  time,
  gameImage,
  getScores,
}) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const details = { name: name, score: time, map: gameImage.name };

    fetch("http://localhost:3000/scores", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      body: JSON.stringify(details),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res.success ? setIsHighscore(false) : console.log("Err on score post");
        return;
      })
      .catch((err) => console.log("Err on score post" + err));

    //Updates scores with new highscore
    getScores(gameImage.name);
  };

  const updateHighscore = () => {
    getScores(gameImage.name);
    setIsHighscore(false);
  };

  return (
    <div
      id="scorePrompt"
      className="absolute inset-1/2 flex flex-col gap-8 p-4 h-56 w-56 rounded-lg"
    >
      <div className="text-center text-lg">A new highscore!</div>
      <form
        onSubmit={handleSubmit}
        method="post"
        action="/scores"
        className="flex flex-col gap-2 "
      >
        <label htmlFor="name">Name</label>
        <input
          required
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          className="w-full"
        />
        <div className="flex gap-14 mt-2.5 ml-7">
          <button type="submit">Submit</button>
          <button onClick={updateHighscore}>Skip</button>
        </div>
      </form>
    </div>
  );
}
