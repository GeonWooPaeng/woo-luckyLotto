import { setPurchasedLottoSection } from "./setPurchasedLottoSection.js";

const calCntLottoNums = (money) => {
  return (money - (money % 1000)) / 1000;
};

const LottoStart = () => {
  const $purchaseLottoMoney = document.querySelector("#purchase-lotto-money");
  setPurchasedLottoSection(calCntLottoNums($purchaseLottoMoney.value));
};

export const init = () => {
  const $purchaseLottoButton = document.querySelector("#purchase-lotto-button");

  $purchaseLottoButton.addEventListener("click", LottoStart);
  // hidePurchasedLottoSection();
  // disabledWinningAndBonusNumber();
  // disabledResultModalButton();
};
