import {
  onModalNumberShow,
  onModalNumberClose,
} from "../setAttribute/setAttOnModalNumber.js";

export const controlOnModalNumber = () => {
  const $modalNumberClose = document.querySelector(".modal-number-close");
  const $lottoNumbersToggleButton = document.querySelector(
    ".lotto-numbers-toggle-button"
  );

  $modalNumberClose.addEventListener("click", onModalNumberClose);
  $lottoNumbersToggleButton.addEventListener("click", (event) => {
    if (event.target.checked) {
      onModalNumberShow();
    }
  });
};
