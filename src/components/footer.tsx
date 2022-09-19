import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="fixed inset-x-0 bottom-0 bg-slate-300 dark:bg-indigo-800/25 p-2">
        <Link href="https://github.com/anOatFlake/liederbuch">
          <a>Github Repo</a>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
