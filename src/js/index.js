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

// ----------------------
// switch 눌렀을 때 발생
const $modalNumber = document.querySelector(".modal-number");
const $modalNumberClose = document.querySelector(".modal-number-close");
const $switch = document.querySelector(".switch");

const setLottoNumberOnModal = () => {
  const $lottoNumberTableLastChild = document.querySelector(
    ".lotto-number-table > tbody"
  );
  const $lottoImgs = document.querySelectorAll(".lotto-img");

  $lottoNumberTableLastChild.innerHTML = "";
  $lottoImgs.forEach(($lottoImg, idx) => {
    let lottoNums = $lottoImg.dataset.number.split(",").join("-");
    $lottoNumberTableLastChild.insertAdjacentHTML(
      "beforeend",
      `<tr class="text-center>
        <td class="p-3"></td>
        <td class="p-3">${idx}</td>
        <td class="p-3">${lottoNums}</td>
      </tr>`
    );
  });
};

const onModalNumberShow = () => {
  $modalNumber.classList.add("open");
  setLottoNumberOnModal();
};
const onModalNumberClose = () => {
  $modalNumber.classList.remove("open");
};

$modalNumberClose.addEventListener("click", onModalNumberClose);
$switch.addEventListener("click", (event) => {
  if (event.target.checked) {
    onModalNumberShow();
  }
});

// ----------------------

const calCntLottoNums = (money) => {
  return (money - (money % 1000)) / 1000;
};

const setLottoCntHTML = (lottoCnt) => {
  return `<label class="flex-auto my-0">총 ${lottoCnt}개를 구매하였습니다.</label>`;
};

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

const setLottoImgHTML = () => {
  let number = getRandomNumsToString();
  return `<span class="lotto-img mx-1 text-4xl" data-number="${number}">🎟️ </span>`;
};

const setPurchasedLottoSection = (lottoCnt) => {
  //나누기
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
