export const setLottoNumberOnModal = () => {
  const $lottoNumberTableLastChild = document.querySelector(
    ".lotto-number-table > tbody"
  );
  const $lottoImgs = document.querySelectorAll(".lotto-img");

  $lottoNumberTableLastChild.innerHTML = "";
  $lottoImgs.forEach(($lottoImg, idx) => {
    let lottoNums = $lottoImg.dataset.number.split(",").join("-");
    $lottoNumberTableLastChild.insertAdjacentHTML(
      "beforeend",
      `<tr class="text-center>
            <td class="p-3"></td>
            <td class="p-3">${idx}</td>
            <td class="p-3">${lottoNums}</td>
          </tr>`
    );
  });
};
