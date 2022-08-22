import { getNowPlaying } from "../../lib/spotify";

export default async (_, res) => {
  let item;
  try {
    const response = await getNowPlaying();
    if (response.status === 204 && response.statusText === "No Content") {
      item = null;
    } else {
      const data = await response.json();
      item = data;
    }
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({ data: item });
};
