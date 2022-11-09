import Link from "next/link";

const SideBar: React.FC = () => {
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
      <nav className="">
        <div className="fixed top-0 w-full p-4 border-b-2 border-teal-700 md:hidden">
          <button>Insert menu icon</button>
        </div>
        <div>
          
        </div>

        <div className="fixed top-0 hidden h-full p-4 border-r-2 border-teal-700 md:block w-52">
          <div className="px-4 mt-4">
            <Link href={"/currentSong"}>Folgen</Link>
          </div>
          <div className="px-4 mt-2">
            <Link href={"/profile"}>Profil</Link>
          </div>
          <div className="px-4 mt-6">
            <Link href={"/songs"}>Liste</Link>
          </div>
          <div className="grid grid-cols-6 px-2 mt-1">
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
        </div>
      </nav>
    </>
  );
};

export default SideBar;
