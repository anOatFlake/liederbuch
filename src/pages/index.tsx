import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
    
    </>
  );
};

export default Home;
