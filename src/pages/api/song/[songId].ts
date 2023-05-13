import { type NextApiRequest, type NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const songsDirectory = path.join(process.cwd(), "public", "songs");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { songId } = req.query;
  const songPath = path.join(songsDirectory, songId + `.html`);
  const songContent = fs.readFileSync(songPath, `utf-8`);
  res.send({
    content: songContent,
  });
};
export default handler;
