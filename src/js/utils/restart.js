export const restart = () => {
  const $purchaseLottoMoney = document.querySelector("#purchase-lotto-money");
  const $purchasedLottoCnt = document.querySelector(".purchased-lotto-cnt");
  const $purchasedLottoImg = document.querySelector("#purchased-lotto-img");
  const $winningNumbers = document.querySelectorAll(".winning-number");
  const $bonusNumber = document.querySelector(".bonus-number");

  $purchaseLottoMoney.value = "";
  $purchasedLottoCnt.textContent = ""; // undefined 일 경우 error 발생
  $purchasedLottoImg.textContent = "";
  $bonusNumber.value = "";
  $winningNumbers.forEach(($winningNumber) => {
    $winningNumber.value = "";
  });
};
