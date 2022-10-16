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
      <nav className="fixed top-0 h-full w-52 bg-slate-800/10 p-4 shadow-md">
        <div className="px-2">
          <Link href={"/profile"} className="px-2">
            <a>Profil</a>
          </Link>
        </div>
        <div className="mt-4 px-2">
          <Link href={"/currentSong"}>
            <a>Folgen</a>
          </Link>
        </div>

        <div className="mt-8 px-2">
          <Link href={"/songs"} className="px-2">
            <a>Liste</a>
          </Link>
        </div>
        <div className="grid grid-cols-6 px-2">
          {letters.map((letter: string, index: number) => (
            <div className="p-1 text-center">
              <Link href={"/songs?letter=" + letter}>
                <a>{letter}</a>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SideBar;
