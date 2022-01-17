import { setLottoNumberOnModalHtml } from "./setHtml/setLottoNumberOnModalHtml.js";

export const setLottoNumberOnModal = () => {
  const $lottoNumberTableLastChild = document.querySelector(
    ".lotto-number-table > tbody"
  );
  const $lottoImgs = document.querySelectorAll(".lotto-img");

  $lottoNumberTableLastChild.innerHTML = "";
  $lottoImgs.forEach(($lottoImg, idx) => {
    let lottoNums = $lottoImg.dataset.number.split(",").join("-");
    $lottoNumberTableLastChild.insertAdjacentHTML(
      "beforeend",
      setLottoNumberOnModalHtml(idx, lottoNums)
    );
  });
};
