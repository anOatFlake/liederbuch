import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-10 flex justify-end p-3 bg-slate-300 dark:bg-slate-800">
        <div className="invisible px-2">
          <Link href={"/currentSong"}>
            <a>Folgen</a>
          </Link>
        </div>
        <div className="px-2">
          <Link href={"/songs"} className="px-2">
            <a>Liste</a>
          </Link>
        </div>
        <div className="invisible px-2">
          <Link href={"/profile"} className="px-2">
            <a>Profil</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

// Login
// Nutzer | Folgen | Alle Songs |
