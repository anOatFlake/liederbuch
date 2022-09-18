import Link from "next/link";

const Footer = () => {
  return (
  <>  
    <hr/>
    <div className="p-2 justify-center">
      <Link href="https://github.com/anOatFlake/liederbuch">
        <a>
          Github Repo
        </a>
      </Link>
    </div>
  </>
  );
};

export default Footer;
