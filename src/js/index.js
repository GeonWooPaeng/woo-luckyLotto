import { init } from "./utils/init.js";
import { controlOnModalNumber } from "./utils/controlModal/controlOnModalNumber.js";
import { controlOnModalResult } from "./utils/controlModal/controlOnModalResult.js";
//controlOnModalResult 부분에서 restart-btn제어 하기

export const luckyLotto = () => {
  init();
  controlOnModalNumber();
  controlOnModalResult();
};

window.onload = () => {
  luckyLotto();
};
