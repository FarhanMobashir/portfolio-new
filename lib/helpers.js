export const getPostMinute = (content) => {
  const words = content.split(" ");
  const minutes = Math.ceil(words.length / 200);
  return minutes;
};
