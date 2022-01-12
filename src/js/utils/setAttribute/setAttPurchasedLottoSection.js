import { showElement, hideElement } from "./setAttribute.js";

export const showPurchasedLottoSection = () => {
  const $purchasedLottoSection = document.querySelector(
    "#purchased-lotto-section"
  );
  showElement($purchasedLottoSection);
};

export const hidePurchasedLottoSection = () => {
  const $purchasedLottoSection = document.querySelector(
    "#purchased-lotto-section"
  );
  hideElement($purchasedLottoSection);
};
