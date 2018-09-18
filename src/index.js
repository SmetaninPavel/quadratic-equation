module.exports = function solveEquation(equation) {
  const equationArray = equation.split(' ');

  const a = +(equationArray[0]);
  const b = +(equationArray[3] + equationArray[4]);
  const c = +(equationArray[7] + equationArray[8]);

  const D = (b * b) - (4 * a * c);

  if (D < 0) {
    return [];
  } else if (D === 0) {
    const x = Math.round((- b) / (2 * a));
    return [x];
  } else {
    const x1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
    const x2 = Math.round((-b - Math.sqrt(D)) / (2 * a));

    return [x1, x2].sort((a, b) => a - b);
  }
}
