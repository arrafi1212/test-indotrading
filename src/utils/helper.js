export function formatter(x) {
  if (x == null) {
    return x;
  }

  const newX = x.toString();

  // Split the number into integer and decimal parts
  const parts = newX.split(".");
  let integerPart = parts[0];
  const decimalPart = parts[1] || "";

  // Format the integer part with commas for thousands
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(integerPart)) {
    integerPart = integerPart.replace(pattern, "$1.$2");
  }

  // Combine the formatted integer and decimal parts
  const formattedNumber = decimalPart
    ? `${integerPart},${decimalPart}`
    : integerPart;

  return formattedNumber;
}
