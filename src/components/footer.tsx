import Link from "next/link";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="justify-center p-2">
        <Link href="https://github.com/anOatFlake/liederbuch">
          <a>Github Repo</a>
        </Link>
      </div>
    </>
  );
};

export default Footer;
