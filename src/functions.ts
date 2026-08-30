import { laosNumberingPlan } from "./numbering-plan";

const countryCode = "856";

function containsOnlyDigits(value: string): boolean {
  if (value.length === 0) {
    return false;
  }

  for (let index = 0; index < value.length; index += 1) {
    const characterCode = value.charCodeAt(index);

    if (characterCode < 48 || characterCode > 57) {
      return false;
    }
  }

  return true;
}

function nationalNumberFrom(phoneNumber: string): string | null {
  let nationalNumber: string;

  if (phoneNumber.startsWith(`+${countryCode}`)) {
    nationalNumber = phoneNumber.slice(countryCode.length + 1);
  } else if (phoneNumber.startsWith(countryCode)) {
    nationalNumber = phoneNumber.slice(countryCode.length);
  } else if (phoneNumber.startsWith("0")) {
    nationalNumber = phoneNumber.slice(1);
  } else {
    return null;
  }

  return containsOnlyDigits(nationalNumber) ? nationalNumber : null;
}

function verify(phoneNumber: string): boolean {
  const nationalNumber = nationalNumberFrom(phoneNumber);

  return (
    nationalNumber !== null &&
    laosNumberingPlan.some(
      ({ prefixes, nationalNumberLength }) =>
        nationalNumber.length === nationalNumberLength &&
        prefixes.some((prefix) => nationalNumber.startsWith(prefix))
    )
  );
}

export { verify };
