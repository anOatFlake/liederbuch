import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { LETTERS } from "../data/letters";

/**
 * The navigation sidebar
 */
const SideBar: React.FC = () => {
  const { data: sessionData } = useSession();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full border-b-2 border-gray-500 bg-gray-200 p-4 dark:border-gray-700 dark:bg-gray-900 md:hidden">
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
            "fixed bottom-0 top-14 mt-0.5 w-full overflow-y-auto overscroll-none bg-gray-200 dark:bg-gray-900 md:hidden"
          }
        >
          <div className="mt-6 w-full px-8 tracking-widest underline-offset-4 hover:underline">
            <Link href={"/currentSong"} onClick={() => setExpanded(false)}>
              Folgen (WIP)
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
                <Link href={"/songbooks"}>Liederbücher (WIP)</Link>
              </div>
              <div className="mt-6 w-full px-8 tracking-widest underline-offset-4 hover:underline">
                <Link href={"/"}>Unterpunkt create Songbook (WIP)</Link>
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
          <div className="mt-12 px-8 tracking-widest underline-offset-4 hover:underline">
            Search (WIP)
          </div>
          <div className="mt-6 w-full px-8 tracking-widest underline-offset-4 hover:underline">
            <Link href={"/songs"} onClick={() => setExpanded(false)}>
              Liste
            </Link>
          </div>
          <div className="mt-1 grid w-screen grid-cols-6 px-8">
            {LETTERS.map((letter: string) => (
              <button
                key={letter}
                className="p-2 text-center underline-offset-4 hover:underline"
              >
                <Link
                  href={{
                    pathname: "/songs",
                    query: { letter: letter },
                  }}
                  passHref={true}
                  onClick={() => setExpanded(false)}
                >
                  {letter}
                </Link>
              </button>
            ))}
          </div>
          {
            //Support Buttons
          }
          <div className="mt-12 px-8 pb-8 tracking-widest underline-offset-4">
            <button
              className="container justify-center rounded-full border-2 border-teal-500/30 p-2 text-xs font-bold tracking-widest hover:border-teal-600/50  dark:border-teal-800/30 dark:hover:border-teal-700/40"
              onClick={() => {
                console.log();
              }}
            >
              SUGGEST SONG (WIP)
            </button>
            <button
              className="container mt-2 justify-center rounded-full border-2 border-red-300/70 p-2 text-xs font-bold tracking-widest hover:border-red-400/50  dark:border-red-700/20 dark:hover:border-red-900/30"
              onClick={() => {
                console.log();
              }}
            >
              REPORT BUG (WIP)
            </button>
          </div>
        </nav>
      ) : (
        <></>
      )}

      <nav className="fixed top-0 hidden h-full w-64 border-r-2 border-gray-400 p-4 dark:border-gray-700 md:block">
        <div className="mt-6 px-4 tracking-widest underline-offset-4 hover:underline">
          <Link href={"/currentSong"}>Folgen (WIP)</Link>
        </div>
        {sessionData ? (
          <>
            <div className="mt-6 w-full px-4 tracking-widest underline-offset-4 hover:underline">
              <Link href={"/profile"}>Profil</Link>
            </div>
            <div className="mt-6 w-full px-4 tracking-widest underline-offset-4 hover:underline">
              <Link href={"/songbooks"}>Liederbücher (WIP)</Link>
            </div>
            <div className="mt-6 w-full px-4 tracking-widest underline-offset-4 hover:underline">
              <Link href={"/"}>Unterpunkt create Songbook (WIP)</Link>
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
          Search (WIP)
        </div>
        <div className="mt-6 w-full px-4 tracking-widest underline-offset-4 hover:underline">
          <Link href={"/songs"}>Liste</Link>
        </div>
        <div className="mt-1 grid grid-cols-6 px-2">
          {LETTERS.map((letter: string) => (
            <button
              key={letter}
              className="p-2 text-center underline-offset-4 hover:underline"
            >
              <Link
                href={{
                  pathname: "/songs",
                  query: { letter: letter },
                }}
                passHref={true}
              >
                {letter}
              </Link>
            </button>
          ))}
        </div>
        {
          //Support Buttons
        }
        <div className="mt-12 px-4 tracking-widest underline-offset-4">
          <button
            className="container justify-center rounded-full border-2 border-teal-500/30 p-2 text-xs font-bold tracking-widest hover:border-teal-600/50  dark:border-teal-800/30 dark:hover:border-teal-700/40"
            onClick={() => {
              console.log();
            }}
          >
            SUGGEST SONG (WIP)
          </button>
          <button
            className="container mt-2 justify-center rounded-full border-2 border-red-300/70 p-2 text-xs font-bold tracking-widest hover:border-red-400/50  dark:border-red-700/20 dark:hover:border-red-900/30"
            onClick={() => {
              console.log();
            }}
          >
            REPORT BUG (WIP)
          </button>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
