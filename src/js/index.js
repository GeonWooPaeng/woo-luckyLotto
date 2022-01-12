import { init } from "./utils/init.js";
import { controlOnModalNumber } from "./utils/controlModal/controlOnModalNumber.js";

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

export const luckyLotto = () => {
  init();
  controlOnModalNumber();
};

window.onload = () => {
  luckyLotto();
};
