import isLaosPhoneNumber from "../functions";

describe("isLaosPhoneNumber function", () => {
  it("should validate passed", () => {
    expect(isLaosPhoneNumber("+8562059158789")).toBe(true);
    expect(isLaosPhoneNumber("02059158789")).toBe(true);
    expect(isLaosPhoneNumber("+856301234567")).toBe(true);
    expect(isLaosPhoneNumber("0301234567")).toBe(true);
    expect(isLaosPhoneNumber("0217894583")).toBe(true);
    expect(isLaosPhoneNumber("12345678")).toBe(true);
  });

  it("should validate failed", () => {
    expect(isLaosPhoneNumber("0205915878")).toBe(false);
    expect(isLaosPhoneNumber("0205915878a")).toBe(false);
    expect(isLaosPhoneNumber("+789205915878")).toBe(false);
    expect(isLaosPhoneNumber("+7890205915878")).toBe(false);
  });
});


