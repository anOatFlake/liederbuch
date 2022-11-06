import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="fixed inset-x-0 bottom-0 bg-slate-300 p-2 dark:bg-indigo-800/25">
        <Link href="https://github.com/anOatFlake/liederbuch">
          Github Repo
        </Link>
      </footer>
    </>
  );
};

export default Footer;
