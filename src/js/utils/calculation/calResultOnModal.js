const setResultNumberMap = (cnt, lottoResult) => {
  //cnt === 5.5인 경우 5 + bonus 입니다.
  if (lottoResult.has(cnt)) lottoResult.set(cnt, lottoResult.get(cnt) + 1);
  else lottoResult.set(cnt, 1);
};

const calCorrectLottoNumber = ($lottoImg, winningNums, bonusNumber) => {
  const lottoNums = $lottoImg.dataset.number.split(",");
  let cnt = 0;

  winningNums.forEach((winningNums) => {
    if (lottoNums.includes(winningNums)) cnt++;
  });
  if (cnt === 5 && lottoNums.includes(bonusNumber)) return 5.5; // 5 + bonus
  return cnt;
};

export const calResultOnModal = (winningNums, bonusNumber) => {
  const $lottoImgs = document.querySelectorAll(".lotto-img");
  const lottoResult = new Map();

  $lottoImgs.forEach(($lottoImg) => {
    let cnt = calCorrectLottoNumber($lottoImg, winningNums, bonusNumber);
    if (cnt > 2) setResultNumberMap(cnt, lottoResult);
  });
  return lottoResult;
};
