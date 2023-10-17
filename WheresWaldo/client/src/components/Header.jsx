import { useEffect } from "react";

export default function Header({ gameState, characters, found, time }) {
  useEffect(() => {
    console.log(found);
  }, [gameState, found]);

  const renderHeader = (state) => {
    switch (state) {
      case "start":
        return (
          <div className="bg-yellow-400 text-2xl text-center text-gray-900 p-6">
            Pick a stage!
          </div>
        );

      case "inProgress":
        return (
          <div className="flex justify-center items-center gap-6 bg-yellow-400 text-2xl text-center text-gray-900 p-2">
            <div>Find the characters! </div>
            <li className="flex justify-between gap-6">
              {characters.map((char, index) => {
                return (
                  <ul key={char.id} className="text-lg">
                    <img
                      className="h-16"
                      src={char.src}
                      alt={"picture of" + char.name}
                    />
                    {found[index] ? (
                      <div className="line-through">{char.name}</div>
                    ) : (
                      <div>{char.name}</div>
                    )}
                  </ul>
                );
              })}
            </li>
            <div>
              {time.minutes}mins {time.seconds}s
            </div>
          </div>
        );

      case "end":
        return (
          <div className="flex justify-center items-center gap-6 bg-yellow-400 text-2xl text-center text-gray-900 p-2">
            <div>You found everyone! </div>
            <li className="flex justify-between gap-6">
              {characters.map((char, index) => {
                return (
                  <ul key={char.id} className="text-lg">
                    <img
                      className="h-16"
                      src={char.src}
                      alt={"picture of" + char.name}
                    />
                    {found[index] ? (
                      <div className="line-through">{char.name}</div>
                    ) : (
                      <div>{char.name}</div>
                    )}
                  </ul>
                );
              })}
            </li>
            <div>
              {time.minutes}mins {time.seconds}s
            </div>
          </div>
        );
    }
  };

  return <>{renderHeader(gameState)}</>;
}

//Make timer after DuringGame. Try to make timer only update once a second
//Check if found crossthrough works later
