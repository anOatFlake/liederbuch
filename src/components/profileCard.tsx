import Image from "next/image";

const ProfileCard: React.FC<{
  uname: string;
  email: string;
  image?: string;
  inviteCode?: string;
}> = ({ uname, email, image, inviteCode }) => {
  return (
    <div className="flex min-w-max max-w-min flex-row rounded-lg bg-gray-300 p-4 dark:bg-slate-800">
      <Image
        className="h-20 w-20 rounded-full"
        src={image ?? ""}
        alt="Profile Picture"
        width={100}
        height={100}
      />
      <ul className="pl-4">
        <li className="w-max">
          <span className="pr-2 text-right text-xs font-bold text-gray-500 dark:text-slate-500">
            USERNAME:
          </span>
          <span className="float-right">{uname}</span>
        </li>
        <li>
          <span className="pr-2 text-right text-xs font-bold text-gray-500 dark:text-slate-500">
            EMAIL:
          </span>
          <span className="float-right">{email}</span>
        </li>
        <li>
          <span className="pr-2 text-right text-xs font-bold text-gray-500 dark:text-slate-500">
            INVITE CODE:
          </span>
          <span className="float-right">{inviteCode}</span>
        </li>
      </ul>
    </div>
  );
};
export default ProfileCard;
