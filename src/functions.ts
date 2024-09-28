export function isNumber(input: string) {
  const num = Number(input);
  return !isNaN(Number(input)) && num >= 1;
}
const prefixFor8digit = ["+85620", "85620", "20", "020"];

const prefixFor7digit = [
  "+85621",
  "85621",
  "21",
  "021",
  "+85630",
  "85630",
  "30",
  "030",
];

export function isLaosPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length > 14) {
    return false;
  }

  // verify input number is number string
  if (!isNumber(phoneNumber)) {
    return false;
  }

  if (phoneNumber.length === 8) {
    return true;
  }

  let result = prefixFor8digit.some(
    (prefix) => phoneNumber.startsWith(prefix) && phoneNumber.replace(prefix, "").length === 8
  );

  if (!result) {
    result = prefixFor7digit.some(
      (prefix) => phoneNumber.startsWith(prefix) && phoneNumber.replace(prefix, "").length === 7
    );
  }

  return result;
}
