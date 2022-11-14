import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

/**
 * The navigation sidebar
 */
const SideBar: React.FC = () => {
  const { data: sessionData } = useSession();

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
      <div className="fixed top-0 w-full border-b-2 border-teal-500 p-4 dark:border-teal-700 md:hidden">
        <button id="nav-toggle" type="button" aria-pressed="false">
          Insert menu icon
        </button>
      </div>
      <nav className="fixed bottom-0 top-16 w-full md:hidden">
        <div className="mt-6 w-full px-8 tracking-widest underline-offset-4 hover:underline">
          <Link href={"/currentSong"}>Folgen</Link>
        </div>
        {sessionData ? (
          <>
            <div className="mt-6 w-full px-8 tracking-widest underline-offset-4 hover:underline">
              <Link href={"/profile"}>Profil</Link>
            </div>
            <div className="mt-6 w-full  tracking-widest underline-offset-4 hover:underline">
              <Link href={"/"} onClick={() => signOut()}>Logout</Link>
            </div>
          </>
        ) : (
          <div className="mt-6 w-full  tracking-widest underline-offset-4 hover:underline">
            <Link href={"/"} onClick={() => signIn()}>Login</Link>
          </div>
        )}
        <div className="mt-12 w-full px-8 tracking-widest underline-offset-4 hover:underline">
          <Link href={"/songs"}>Liste</Link>
        </div>
        <div className="mt-1 grid w-screen grid-cols-6 px-8">
          {letters.map((letter: string) => (
            <button
              key={letter}
              className="p-2 text-center underline-offset-4 hover:underline"
            >
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

      <nav className="fixed top-0 hidden h-full w-64 border-r-2 border-teal-500 p-4 dark:border-teal-700 md:block">
        <div className="mt-6 px-4 tracking-widest underline-offset-4 hover:underline">
          <Link href={"/currentSong"}>Folgen</Link>
        </div>
        {sessionData ? (
          <>
            <div className="mt-6 w-full px-4 tracking-widest underline-offset-4 hover:underline">
              <Link href={"/profile"}>Profil</Link>
            </div>
            <div className="mt-6 w-full px-4 tracking-widest underline-offset-4 hover:underline">
              <Link href={"/"} onClick={() => signOut()}>Logout</Link>
            </div>
          </>
        ) : (
          <div className="mt-6 w-full px-4 tracking-widest underline-offset-4 hover:underline">
            <Link href={"/"} onClick={() => signIn()}>Login</Link>
          </div>
        )}
        <div className="mt-12 px-4 tracking-widest underline-offset-4 hover:underline">
          <Link href={"/songs"}>Liste</Link>
        </div>
        <div className="mt-1 grid grid-cols-6 px-2">
          {letters.map((letter: string) => (
            <button
              key={letter}
              className="p-2 text-center underline-offset-4 hover:underline"
            >
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
