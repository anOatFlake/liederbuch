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
        <nav className="top-0 w-52 h-full shadow-md p-4 bg-slate-800/10 fixed">
            <div className="px-2">
                <Link href={"/profile"} className="px-2">
                    <a>Profil</a>
                </Link>
            </div>
            <div className="px-2 mt-4">
                <Link href={"/currentSong"}>
                    <a>Folgen</a>
                </Link>
            </div>
            
            <div className="px-2 mt-8">
                <Link href={"/songs"} className="px-2">
                    <a>Liste</a>
                </Link>
            </div>
            <div className="grid grid-cols-6 px-2"> 
                {letters.map((letter: string, index: number) => (
                <button className="p-1"
                    key={index}
                    onClick={() => {
                    
                    }}
                >
                    {letter}
                </button>
                ))}
            </div>
        </nav>
        </>
    )
};

export default SideBar;