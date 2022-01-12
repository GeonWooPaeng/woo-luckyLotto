import { showPurchasedLottoSection } from "./setAttribute/setAttPurchasedLottoSection.js";
import { setLottoCntHTML } from "./setHtml/setLottoCntHtml.js";
import { setLottoImgHTML } from "./setHtml/setLottoImgHtml.js";

export const setPurchasedLottoSection = (lottoCnt) => {
  const $purchasedLottoImg = document.querySelector("#purchased-lotto-img");
  const $purchasedLottoSectionDiv = document.querySelector(
    "#purchased-lotto-section > div"
  );

  showPurchasedLottoSection();
  $purchasedLottoSectionDiv.removeChild($purchasedLottoSectionDiv.firstChild);
  $purchasedLottoImg.innerHTML = "";

  $purchasedLottoSectionDiv.insertAdjacentHTML(
    "afterbegin",
    setLottoCntHTML(lottoCnt)
  );
  for (let i = 0; i < lottoCnt; i++) {
    $purchasedLottoImg.insertAdjacentHTML("beforeend", setLottoImgHTML());
  }
};
