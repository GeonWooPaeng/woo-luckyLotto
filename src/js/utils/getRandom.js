const getRandomNum = () => {
  let max = 45;
  let min = 1;
  return Math.random() * max + min;
};

export const getRandomNumsToString = () => {
  let num_string = "";
  for (let i = 0; i < 6; i++) {
    num_string += Math.floor(getRandomNum());
    if (i !== 5) num_string += ",";
  }
  return num_string;
};
