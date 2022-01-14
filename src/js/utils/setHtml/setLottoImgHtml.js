import { getRandomNumsToString } from "../getRandom.js";

export const setLottoImgHTML = () => {
  let number = getRandomNumsToString();
  return `<span class="lotto-img mx-1 text-4xl" data-number="${number}">🎟️ </span>`;
};
