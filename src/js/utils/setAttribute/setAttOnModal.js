import { setResult } from "../setResult.js";

export const showOnModal = () => {
  const $modal = document.querySelector(".modal");
  setResult();
  $modal.classList.add("open");
};

export const closeOnModal = () => {
  const $modal = document.querySelector(".modal");
  $modal.classList.remove("open");
};
