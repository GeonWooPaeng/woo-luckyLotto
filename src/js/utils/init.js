import { hidePurchasedLottoSection } from "./setAttribute/setAttPurchasedLottoSection.js";
import { disabledWinningAndBonusNumber } from "./setAttribute/setAttWinningAndBonusNumber.js";
import { disabledResultModalButton } from "./setAttribute/setAttResultModalButton.js";
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
  const $lottoNumbersToggleButton = document.querySelector(
    ".lotto-numbers-toggle-button"
  );

  $purchaseLottoButton.addEventListener("click", LottoStart);
  // $lottoNumbersToggleButton.addEventListener("click");
  hidePurchasedLottoSection();
  disabledWinningAndBonusNumber();
  disabledResultModalButton();
};
