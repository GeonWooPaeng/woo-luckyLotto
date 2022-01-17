import { showOnModal, closeOnModal } from "../setAttribute/setAttOnModal.js";

const restart = () => {
  //구입 금앱 입력 부분 빈칸
  //lotto img 전체 삭제
  //modal-numbers 부분 삭제
  // 당첨번호, 보너스 번호 빈칸
  //
};

export const controlOnModalResult = () => {
  const $showResultButton = document.querySelector(".open-result-modal-button");
  const $modalClose = document.querySelector(".modal-close");
  const $restartButton = document.querySelector(".restart-btn");

  $showResultButton.addEventListener("click", showOnModal);
  $modalClose.addEventListener("click", closeOnModal);
  $restartButton.addEventListener("click", restart);
};
