import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="flex container sticky top-0 bg-slate-500 dark:bg-slate-800 p-4 justify-end">
        <div className="px-2">
          <Link href={'/currentSong'}>
            <a>Folgen</a>
          </Link>
        </div>
        <div className="px-2">
          <Link href={'/songs'} className="px-2">
            <a>Liste</a>
          </Link>
        </div>
        <div className="px-2">
          <Link href={'/profile'} className="px-2">
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
