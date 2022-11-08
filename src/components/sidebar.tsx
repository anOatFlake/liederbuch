import Link from "next/link";

const SideBar = () => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0-9",
  ];
  return (
    <>
      <nav className="fixed top-0 h-full p-4 shadow-md w-52 bg-slate-800/10">
        <div className="px-4">
          <Link href={"/profile"}>
            Profil
          </Link>
        </div>
        <div className="px-4 mt-4">
          <Link href={"/currentSong"}>
            Folgen
          </Link>
        </div>

        <div className="px-4 mt-8">
          <Link href={"/songs"}>
            Liste
          </Link>
        </div>
        <div className="grid grid-cols-6 px-2">
          {letters.map((letter: string) => (
            <button key={letter} className="p-1 text-center">
              <Link
                href={{
                  pathname: "/songs",
                  query: { letter: letter },
                }}
              >
                {letter}
              </Link>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SideBar;
