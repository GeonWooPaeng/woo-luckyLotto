import {
  onModalNumberShow,
  onModalNumberClose,
} from "../setAttribute/setAttOnModalNumber.js";

export const controlOnModalNumber = () => {
  const $modalNumberClose = document.querySelector(".modal-number-close");
  const $switch = document.querySelector(".switch");

  $modalNumberClose.addEventListener("click", onModalNumberClose);
  $switch.addEventListener("click", (event) => {
    if (event.target.checked) {
      onModalNumberShow();
    }
  });
};
