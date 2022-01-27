import { setResult } from "../setResult.js";
import { restart } from "../restart.js";

export const showOnModal = () => {
  const $modal = document.querySelector(".modal-result");
  const $restartButton = document.querySelector(".restart-btn");

  setResult();
  $restartButton.addEventListener("click", restart);
  $modal.classList.add("open");
};

export const closeOnModal = () => {
  const $modal = document.querySelector(".modal-result");
  $modal.classList.remove("open");
};
