/** */
const test = (
  sample: number[],
  target: number
): number => {
  let res = 0;
  let prefix = 0;
  for (let i = 0; i < sample.length; i++) {
    for (let v = i + 1; v < sample.length; v++) {
      if (i + v === target) {
        res = 2;
        break;
      }

    }
  }
  return res;
}