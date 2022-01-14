import { setLottoNumberOnModal } from "../setLottoNumberOnModal.js";

export const onModalNumberShow = () => {
  const $modalNumber = document.querySelector(".modal-number");
  $modalNumber.classList.add("open");
  setLottoNumberOnModal();
};

export const onModalNumberClose = () => {
  const $modalNumber = document.querySelector(".modal-number");
  const $lottoNumbersToggleButton = document.querySelector(
    ".lotto-numbers-toggle-button"
  );

  $modalNumber.classList.remove("open");
  $lottoNumbersToggleButton.checked = false;
};
