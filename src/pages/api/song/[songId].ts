import { type NextApiRequest, type NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const songsDirectory = path.join(process.cwd(), "src", "songs");

const songdata = async (req: NextApiRequest, res: NextApiResponse) => {
  const songPath = path.join(songsDirectory, `Bella_Ciao.html`);
  const songContent = fs.readFileSync(songPath, `utf-8`);
  res.send({
    content: songContent,
  });
};
export default songdata;
