const getRandomNum = () => {
  let max = 45;
  let min = 1;
  return Math.random() * max + min;
};

const getRandomNumsToString = () => {
  let num_string = "";
  for (let i = 0; i < 6; i++) {
    num_string += Math.floor(getRandomNum());
    if (i !== 5) num_string += ",";
  }
  return num_string;
};

export const setLottoImgHTML = () => {
  let number = getRandomNumsToString();
  return `<span class="lotto-img mx-1 text-4xl" data-number="${number}">🎟️ </span>`;
};
