import { setLottoNumberOnModal } from "../setLottoNumberOnModal.js";

export const showOnModalNumber = () => {
  const $modalNumber = document.querySelector(".modal-number");
  $modalNumber.classList.add("open");
  setLottoNumberOnModal();
};

export const closeOnModalNumber = () => {
  const $modalNumber = document.querySelector(".modal-number");
  const $lottoNumbersToggleButton = document.querySelector(
    ".lotto-numbers-toggle-button"
  );

  $modalNumber.classList.remove("open");
  $lottoNumbersToggleButton.checked = false;
};
