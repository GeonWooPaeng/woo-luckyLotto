import { calResultOnModal } from "./calculation/calResultOnModal.js";
import { setResultOnModal } from "./setResultOnModal.js";

export const setResult = () => {
  const $winningNumbers = document.querySelectorAll(".winning-number");
  const $bonusNumber = document.querySelector(".bonus-number");
  let winningNums = [];

  $winningNumbers.forEach(($winningNumber) => {
    winningNums.push($winningNumber.value);
  });

  setResultOnModal(calResultOnModal(winningNums, $bonusNumber.value));
  //Map으로 몇명이 로또를 맞췄는지 포함되어 있습니다.
};
