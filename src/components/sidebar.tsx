import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

/**
 * The navigation sidebar
 */
const SideBar: React.FC = () => {
  const { data: sessionData } = useSession();
  const [expanded, setExpanded] = useState(false);

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
      <div className="fixed top-0 w-full border-b-2 border-teal-500 bg-slate-200 p-4 dark:border-teal-700 dark:bg-gray-900 md:hidden">
        <button
          id="nav-toggle"
          type="button"
          onClick={() => setExpanded((expanded) => !expanded)}
        >
          {expanded ? "Close" : "Open"}
        </button>
      </div>
      {expanded ? (
        <nav
          className={
            "fixed bottom-0 top-16 w-full bg-slate-200 dark:bg-gray-900 md:hidden"
          }
        >
          <div className="mt-6 w-full px-8 tracking-widest underline-offset-4 hover:underline">
            <Link href={"/currentSong"} onClick={() => setExpanded(false)}>
              Folgen
            </Link>
          </div>
          {sessionData ? (
            <>
              <div className="mt-6 w-full px-8 tracking-widest underline-offset-4 hover:underline">
                <Link href={"/profile"} onClick={() => setExpanded(false)}>
                  Profil
                </Link>
              </div>
              <div className="mt-6 w-full px-8 tracking-widest underline-offset-4 hover:underline">
                <Link
                  href={"/"}
                  onClick={() => {
                    setExpanded(false);
                    signOut({ callbackUrl: "http://localhost:3000/" });
                  }}
                >
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <div className="mt-6 w-full px-8 tracking-widest underline-offset-4 hover:underline">
              <Link
                href={"/"}
                onClick={() => {
                  setExpanded(false);
                  signIn("discord");
                }}
              >
                Login
              </Link>
            </div>
          )}
          <div className="mt-12 w-full px-8 tracking-widest underline-offset-4 hover:underline">
            <Link href={"/songs"} onClick={() => setExpanded(false)}>
              Liste
            </Link>
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
                  onClick={() => setExpanded(false)}
                >
                  {letter}
                </Link>
              </button>
            ))}
          </div>
        </nav>
      ) : (
        <></>
      )}

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
              <Link
                href={"/"}
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000/" })
                }
              >
                Logout
              </Link>
            </div>
          </>
        ) : (
          <div className="mt-6 w-full px-4 tracking-widest underline-offset-4 hover:underline">
            <Link href={"/"} onClick={() => signIn("discord")}>
              Login
            </Link>
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
