import { init } from "./utils/init.js";
import { controlOnModalNumber } from "./utils/controlModal/controlOnModalNumber.js";
import { controlOnModalResult } from "./utils/controlModal/controlOnModalResult.js";

export const luckyLotto = () => {
  init();
  controlOnModalNumber();
  controlOnModalResult();
};

window.onload = () => {
  luckyLotto();
};
