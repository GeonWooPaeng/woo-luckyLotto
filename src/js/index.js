import { init } from "./utils/init.js";
import { controlOnModalNumber } from "./utils/controlModal/controlOnModalNumber.js";
import { controlOnModalResult } from "./utils/controlModal/controlOnModalResult.js";
//controlOnModalResult 부분에서 restart-btn제어 하기

const controlOnModalPassive = () => {
  const $passiveToggleButton = document.querySelector(".passive-toggle-button");
  const $modalClose = document.querySelector(".modal-result-close");

  $showResultButton.addEventListener("click", showOnModal);
  $modalClose.addEventListener("click", closeOnModal);
};

export const luckyLotto = () => {
  init();
  controllOnModalPassive();
  controlOnModalNumber();
  controlOnModalResult();
};

window.onload = () => {
  luckyLotto();
};
