import Image from "next/image";

const ProfileCard: React.FC<{
  uname: string;
  email: string;
  image?: string;
  inviteCode?: string;
}> = ({ uname, email, image, inviteCode }) => {
  return (
    <div className="flex min-w-min flex-row justify-center rounded-lg p-4">
      <Image
        className="h-20 w-20 rounded-l-full"
        src={image ?? ""}
        alt="Profile Picture"
        width={100}
        height={100}
      />
      <ul className="container w-60 pl-4">
        <li className="justify-between">
          <span className="pr-1 text-right align-middle text-xs font-bold text-gray-500 dark:text-slate-500">
            USERNAME
          </span>
          <span className="float-right">{uname}</span>
        </li>
        <li className="justify-between">
          <span className="pr-1 text-right text-xs font-bold text-gray-500 dark:text-slate-500">
            EMAIL
          </span>
          <span className="float-right">{email}</span>
        </li>
        <li className="justify-between">
          <span className="pr-1 text-right text-xs font-bold text-gray-500 dark:text-slate-500">
            INVITE CODE
          </span>
          <span className="float-right">{inviteCode}</span>
        </li>
      </ul>
    </div>
  );
};
export default ProfileCard;
