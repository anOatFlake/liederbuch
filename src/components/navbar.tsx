import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="sticky top-0 inset-x-0 z-10 flex justify-end bg-slate-300 p-3 dark:bg-slate-800">
        <div className="invisible px-2">
          <Link href={"/currentSong"}>
            Folgen
          </Link>
        </div>
        <div className="px-2">
          <Link href={"/songs"} className="px-2">
            Liste
          </Link>
        </div>
        <div className="invisible px-2">
          <Link href={"/profile"} className="px-2">
            Profil
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

// Login
// Nutzer | Folgen | Alle Songs |
