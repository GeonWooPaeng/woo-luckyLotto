import { init } from "./utils/init.js";
import { controlOnModalNumber } from "./utils/controlModal/controlOnModalNumber.js";
import { enabledResultModalButton } from "./utils/setAttribute/setAttResultModalButton.js";

const calCorrectLottoNumbers = ($lottoImg, winningNums, bonusNumber) => {
  const lottoNums = $lottoImg.dataset.number.split(",");
  let cnt = 0;

  winningNums.forEach((winningNums) => {
    if (lottoNums.includes(winningNums)) cnt++;
  });
  if (cnt === 5 && lottoNums.includes(bonusNumber)) return 5.5; // 5 + bonus
  return cnt;
};

const setResultMap = (cnt, lottoResult) => {
  //cnt === 5.5인 경우 5 + bonus 입니다.
  if (lottoResult.has(cnt)) lottoResult.set(cnt, lottoResult.get(cnt) + 1);
  else lottoResult.set(cnt, 1);
};

const calResultOnModal = (winningNums, bonusNumber) => {
  const $lottoImgs = document.querySelectorAll(".lotto-img");
  const lottoResult = new Map();

  $lottoImgs.forEach(($lottoImg) => {
    let cnt = calCorrectLottoNumbers($lottoImg, winningNums, bonusNumber);
    if (cnt > 2) setResultMap(cnt, lottoResult);
  });
  return lottoResult;
};

const setResultNumberOnModalHTML = (cnt) => {
  return `<td class="winning-cnt p-3">${cnt}개</td>`;
};

const insertLottoResultNumber = (el, cnt = "n") => {
  el.lastElementChild.remove();
  el.insertAdjacentHTML("beforeend", setResultNumberOnModalHTML(cnt));
  let money = el.lastElementChild.previousElementSibling.textContent.split(",");
  money = Number(money.reduce((acc, cur) => (acc += cur)));
  return cnt * money;
};

const setResultYieldOnModalHTML = (lottoYield = 0) => {
  return `<p class="text-center font-bold">당신의 총 수익률은 ${lottoYield}%입니다.</p>`;
};

const setResultYieldOnModal = (totalWinningMoney) => {
  const $purchaseLottoMoney = document.querySelector("#purchase-lotto-money");
  const $restartButton = document.querySelector(".restart-btn");
  let lottoYield;
  lottoYield =
    Math.floor(totalWinningMoney / Number($purchaseLottoMoney.value)) * 100;
  $restartButton.parentNode.insertAdjacentHTML(
    "beforebegin",
    setResultYieldOnModalHTML(lottoYield)
  );
};

const setResultOnModal = (lottoResult) => {
  //winning-cnt를 이용해서 해당
  const $resultTableTbodyTrs = document.querySelectorAll(
    ".result-table > tbody > tr"
  );
  let totalWinningMoney = 0;
  $resultTableTbodyTrs.forEach(($resultTableTbodyTr, idx) => {
    if (idx == 0 && lottoResult.has(3)) {
      totalWinningMoney += insertLottoResultNumber(
        $resultTableTbodyTr,
        lottoResult.get(3)
      );
    } else if (idx == 1 && lottoResult.has(4)) {
      totalWinningMoney += insertLottoResultNumber(
        $resultTableTbodyTr,
        lottoResult.get(4)
      );
    } else if (idx == 2 && lottoResult.has(5)) {
      totalWinningMoney += insertLottoResultNumber(
        $resultTableTbodyTr,
        lottoResult.get(5)
      );
    } else if (idx == 3 && lottoResult.has(5.5)) {
      totalWinningMoney += insertLottoResultNumber(
        $resultTableTbodyTr,
        lottoResult.get(5.5)
      );
    } else if (idx == 4 && lottoResult.has(6)) {
      totalWinningMoney += insertLottoResultNumber(
        $resultTableTbodyTr,
        lottoResult.get(6)
      );
    } else insertLottoResultNumber($resultTableTbodyTr);
  });
  totalWinningMoney > 0
    ? setResultYieldOnModal(totalWinningMoney)
    : setResultYieldOnModal(0); // 수익률을 제공하는 곳
};

const setResult = () => {
  const $winningNumbers = document.querySelectorAll(".winning-number");
  const $bonusNumber = document.querySelector(".bonus-number");
  let winningNums = [];

  $winningNumbers.forEach(($winningNumber) => {
    winningNums.push($winningNumber.value);
  });

  setResultOnModal(calResultOnModal(winningNums, $bonusNumber.value));
  //Map으로 몇명이 로또를 맞췄는지 포함되어 있습니다.
};

export const onModalShow = () => {
  const $modal = document.querySelector(".modal");
  setResult();
  $modal.classList.add("open");
};

export const onModalClose = () => {
  const $modal = document.querySelector(".modal");
  $modal.classList.remove("open");
};

const controlOnModalResult = () => {
  const $showResultButton = document.querySelector(".open-result-modal-button");
  const $modalClose = document.querySelector(".modal-close");

  $showResultButton.addEventListener("click", onModalShow);
  $modalClose.addEventListener("click", onModalClose);
};

//수익률 = ((당첨금 * 당첨갯수) / 구입가격) * 100
export const luckyLotto = () => {
  init();
  controlOnModalNumber();
  controlOnModalResult();
};

window.onload = () => {
  luckyLotto();
};
