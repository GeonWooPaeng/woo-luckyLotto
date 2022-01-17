import { setResultNumberOnModalHTML } from "./setHtml/setResultNumberOnModalHTML.js";
import { setResultYieldOnModalHTML } from "./setHtml/setResultYieldOnModalHTML.js ";

const insertLottoResultNumber = (el, cnt = "n") => {
  el.lastElementChild.remove();
  el.insertAdjacentHTML("beforeend", setResultNumberOnModalHTML(cnt));
  let money = el.lastElementChild.previousElementSibling.textContent.split(",");
  money = Number(money.reduce((acc, cur) => (acc += cur)));
  return cnt * money;
};

const insertResultYieldOnModal = (totalWinningMoney) => {
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

export const setResultOnModal = (lottoResult) => {
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
    ? insertResultYieldOnModal(totalWinningMoney)
    : insertResultYieldOnModal(0); // 수익률을 제공하는 곳
};
