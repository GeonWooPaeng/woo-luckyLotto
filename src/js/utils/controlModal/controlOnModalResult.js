import { showOnModal, closeOnModal } from "../setAttribute/setAttOnModal.js";

export const controlOnModalResult = () => {
  const $showResultButton = document.querySelector(".open-result-modal-button");
  const $modalClose = document.querySelector(".modal-result-close");

  $showResultButton.addEventListener("click", showOnModal);
  $modalClose.addEventListener("click", closeOnModal);
};
