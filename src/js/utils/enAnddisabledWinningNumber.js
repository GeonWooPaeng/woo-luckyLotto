import { enabledElement, disabledElement } from "./setAttribute.js";

export const enabledWinningAndBonusNumber = () => {
  const $winningNumbers = document.querySelectorAll(".winning-number");
  const $bonusNumber = document.querySelector(".bonus-number");

  $winningNumbers.forEach(($winningNumber) => {
    enabledElement($winningNumber);
  });
  enabledElement($bonusNumber);
};

export const disabledWinningAndBonusNumber = () => {
  const $winningNumbers = document.querySelectorAll(".winning-number");
  const $bonusNumber = document.querySelector(".bonus-number");

  $winningNumbers.forEach(($winningNumber) => {
    disabledElement($winningNumber);
  });
  disabledElement($bonusNumber);
};
