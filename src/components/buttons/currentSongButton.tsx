import { useSession } from "next-auth/react";

const CurrentSongButton: React.FC = () => {
  const { data: sessionData } = useSession();

  //if logged in
  return <></>;
};

export default CurrentSongButton;
