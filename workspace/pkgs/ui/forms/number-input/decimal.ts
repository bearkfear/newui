/** Decimal arithmetic here uses strings only; no floating-point conversion. */
export function normalizeDecimal(value: string): string | undefined {
  if (!/^-?\d+(?:\.\d+)?$/.test(value)) return undefined;
  const negative = value.startsWith("-");
  const [integer = "0", fraction = ""] = value.replace(/^-/, "").split(".");
  const whole = integer.replace(/^0+(?=\d)/, "");
  const decimal = fraction.replace(/0+$/, "");
  const magnitude = decimal ? `${whole}.${decimal}` : whole;
  return negative && magnitude !== "0" ? `-${magnitude}` : magnitude;
}

export function compareDecimals(left: string, right: string): number {
  if (left === right) return 0;
  const leftNegative = left.startsWith("-");
  const rightNegative = right.startsWith("-");
  if (leftNegative !== rightNegative) return leftNegative ? -1 : 1;
  const [leftWhole = "0", leftFraction = ""] = left.replace(/^-/, "").split(".");
  const [rightWhole = "0", rightFraction = ""] = right.replace(/^-/, "").split(".");
  const width = Math.max(leftFraction.length, rightFraction.length);
  const wholeOrder = leftWhole.length - rightWhole.length;
  const a = leftWhole + leftFraction.padEnd(width, "0");
  const b = rightWhole + rightFraction.padEnd(width, "0");
  const order = wholeOrder || (a < b ? -1 : Number(a > b));
  return leftNegative ? -order : order;
}
