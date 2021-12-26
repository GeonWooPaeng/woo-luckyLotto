import {
  hidePurchasedLottoSection,
  showPurchasedLottoSection,
} from "./utils/hideAndShowPurchasedSection.js";
import { disabledResultModalButton } from "./utils/enAnddisabledResultButton.js";
import { disabledWinningAndBonusNumber } from "./utils/enAnddisabledWinningNumber.js";

const $showResultButton = document.querySelector(".open-result-modal-button");
const $modalClose = document.querySelector(".modal-close");
const $modal = document.querySelector(".modal");

export const onModalShow = () => {
  $modal.classList.add("open");
};

export const onModalClose = () => {
  $modal.classList.remove("open");
};

$showResultButton.addEventListener("click", onModalShow);
$modalClose.addEventListener("click", onModalClose);

const calCntLottoNums = (money) => {
  return (money - (money % 1000)) / 1000;
};

const setCntLotto = (lottoCnt) => {
  return `<label class="flex-auto my-0">총 ${lottoCnt}개를 구매하였습니다.</label>`;
};

const setPurchasedLottoSection = (lottoCnt) => {
  const $purchasedLottoSectionDiv = document.querySelector(
    "#purchased-lotto-section > div"
  );
  showPurchasedLottoSection();
  console.log($purchasedLottoSectionDiv);
  $purchasedLottoSectionDiv.insertAdjacentHTML(
    "afterbegin",
    setCntLotto(lottoCnt)
  );
};

const purchaseLottoStart = () => {
  const $purchaseLottoMoney = document.querySelector("#purchase-lotto-money");
  setPurchasedLottoSection(calCntLottoNums($purchaseLottoMoney.value));
};

const init = () => {
  const $purchaseLottoButton = document.querySelector("#purchase-lotto-button");
  const $lottoNumbersToggleButton = document.querySelector(
    ".lotto-numbers-toggle-button"
  );

  $purchaseLottoButton.addEventListener("click", purchaseLottoStart);
  // $lottoNumbersToggleButton.addEventListener("click");
  hidePurchasedLottoSection();
  disabledWinningAndBonusNumber();
  disabledResultModalButton();
};

export const luckyLotto = () => {
  init();
};

window.onload = () => {
  luckyLotto();
};
