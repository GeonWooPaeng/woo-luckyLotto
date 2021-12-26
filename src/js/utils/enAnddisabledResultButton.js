import { enabledElement, disabledElement } from "./setAttribute.js";

export const enabledResultModalButton = () => {
  const $showResultButton = document.querySelector(".open-result-modal-button");
  enabledElement($showResultButton);
};
export const disabledResultModalButton = () => {
  const $showResultButton = document.querySelector(".open-result-modal-button");
  disabledElement($showResultButton);
};
