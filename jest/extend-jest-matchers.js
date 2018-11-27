import { toMatchSnapshot } from "jest-snapshot";
import { getAllCombinations } from "./get-all-combinations";

expect.extend({
  toVerifyAllCombinations(fn, ...args) {
    const snapshot = {};

    getAllCombinations(args).forEach(combination => {
      snapshot[combination] = fn(...combination);
    });

    return toMatchSnapshot.call(this, snapshot);
  }
});
