export const asyncMemoize = fn => {
  let lastArg;
  let lastResult;
  return arg => {
    if (arg !== lastArg) {
      lastArg = arg;
      lastResult = fn(arg);
    }
    return lastResult;
  };
};