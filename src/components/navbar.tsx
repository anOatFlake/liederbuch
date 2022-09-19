import Link from "next/link";

const NavBar = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="flex sticky top-0 left-0 right-0 bg-slate-500 dark:bg-slate-800 p-4 justify-end">
=======
      <div className="sticky  top-0 left-0 right-0 flex justify-end bg-slate-500 p-4 dark:bg-slate-800">
>>>>>>> a132d84cd491196b31b40775a14980fc5eead659
        <div className="px-2">
          <Link href={"/currentSong"}>
            <a>Folgen</a>
          </Link>
        </div>
        <div className="px-2">
          <Link href={"/songs"} className="px-2">
            <a>Liste</a>
          </Link>
        </div>
        <div className="px-2">
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
