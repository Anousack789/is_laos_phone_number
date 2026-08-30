import { verify as isLaosPhoneNumber } from "../functions";

describe("isLaosPhoneNumber function", () => {
  it.each([
    "+8562059158789",
    "8562059158789",
    "02059158789",
    "+856301234567",
    "856301234567",
    "0301234567",
    "+85621212862",
    "85621212862",
    "021212862",
  ])("accepts valid Lao numbers: %s", (phoneNumber) => {
    expect(isLaosPhoneNumber(phoneNumber)).toBe(true);
  });

  it.each([
    "12345678",
    "2059158789",
    "0205915878",
    "020591587890",
    "02010123456",
    "02121286",
    "0212128620",
    "+85671212345",
    "084123456",
    "0205915878a",
    "+789205915878",
    "+7890205915878",
    "+85602059158789",
    "+856 20 59158789",
    "020-59158789",
    " 02059158789",
    "02059158789 ",
    "2.059158789e9",
  ])("rejects invalid or non-canonical input: %s", (phoneNumber) => {
    expect(isLaosPhoneNumber(phoneNumber)).toBe(false);
  });
});
