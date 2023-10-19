export default function Dropdown({
  gameImage,
  setFoundStatus,
  coordinate,
  setModal,
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    const id = e.target.id.charAt(e.target.id.length - 1);
    setFoundStatus(
      gameImage.name,
      gameImage.characters[id].name,
      coordinate,
      id
    );
    setModal(true);
  };

  return (
    <div
      id="dropdown"
      className="absolute rounded-lg"
      style={{ left: coordinate[0] + "px", top: coordinate[1] - 110 + "px" }}
    >
      <li className="list-none flex flex-col p-2 gap-2 " id="charList">
        {gameImage.characters.map((char) => {
          return (
            <ul key={char.id} className="flex justify-center">
              <img
                id={"char" + char.id}
                onClick={handleClick}
                className="h-16 w-auto"
                src={char.src}
                alt={"image of " + char.name}
              />
            </ul>
          );
        })}
      </li>
    </div>
  );
}
