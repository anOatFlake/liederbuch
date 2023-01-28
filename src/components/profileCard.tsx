import Image from "next/image";

const ProfileCard: React.FC<{
  uname: string;
  email: string;
  image?: string;
  inviteCode?: string;
}> = ({ uname, email, image, inviteCode }) => {
  return (
    <div className="flex flex-row">
      <Image
        className="h-20 w-20 rounded-full"
        src={image ?? ""}
        alt="Profile Picture"
        width={100}
        height={100}
      />
      <ul className="pl-4">
        <li>
          <span className="">Username: </span>
          <span className="">{uname}</span>
        </li>
        <li>
          <span className="">Email: </span>
          <span className="">{email}</span>
        </li>
        <li>
          <span className="">InviteCode: </span>
          <span className="">{inviteCode}</span>
        </li>
      </ul>
    </div>
  );
};
export default ProfileCard;
