import Link from "next/link";
import { string } from "zod";

/**
 * The navigation sidebar
 */
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
      <div className="fixed top-0 w-full p-4 border-b-2 border-teal-700 md:hidden">
        <button id="nav-toggle" type="button" aria-pressed="false">
          Insert menu icon
        </button>
      </div>
      <nav className="fixed bottom-0 w-full top-16 md:hidden">
        <div className="w-full px-8 mt-6 tracking-widest">
          <Link href={"/currentSong"}>Folgen</Link>
        </div>
        <div className="w-full px-8 mt-6 tracking-widest">
          <Link href={"/profile"}>Profil</Link>
        </div>
        <div className="w-full px-8 mt-12 tracking-widest">
          <Link href={"/songs"}>Liste</Link>
        </div>
        <div className="grid w-screen grid-cols-6 px-8 mt-1">
          {letters.map((letter: string) => (
            <button key={letter} className="p-2 text-center">
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

      <nav className="fixed top-0 hidden w-64 h-full p-4 border-r-2 border-teal-700 md:block">
        <div className="px-4 mt-6 tracking-widest">
          <Link href={"/currentSong"}>Folgen</Link>
        </div>
        <div className="px-4 mt-6 tracking-widest">
          <Link href={"/profile"}>Profil</Link>
        </div>
        <div className="px-4 mt-12 tracking-widest">
          <Link href={"/songs"}>Liste</Link>
        </div>
        <div className="grid grid-cols-6 px-2 mt-1">
          {letters.map((letter: string) => (
            <button key={letter} className="p-2 text-center">
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