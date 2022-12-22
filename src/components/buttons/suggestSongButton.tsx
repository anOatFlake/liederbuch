import { useSession } from "next-auth/react";

const SuggestSongButton: React.FC = () => {
  const { data: sessionData } = useSession();

  //if logged in
  return <></>;
};

export default SuggestSongButton;
