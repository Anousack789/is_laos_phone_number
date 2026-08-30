/**
 * Lao numbering data, reviewed on 2026-08-30.
 *
 * Sources:
 * - ITU national numbering-plan notice: https://www.itu.int/dms_pub/itu-t/oth/02/02/T02020000750001PDFE.pdf
 * - Google libphonenumber LA metadata: https://github.com/google/libphonenumber/blob/master/resources/PhoneNumberMetadata.xml
 *
 * The plan is intentionally versioned with the package so validation never
 * depends on a network request. Update this registry as part of a release when
 * the national numbering plan changes.
 */
export interface NumberingRule {
  readonly type: "fixed-line" | "mobile";
  readonly prefixes: readonly string[];
  readonly nationalNumberLength: number;
}

export const laosNumberingPlan: readonly NumberingRule[] = [
  {
    type: "fixed-line",
    prefixes: ["21"],
    nationalNumberLength: 8,
  },
  {
    type: "mobile",
    prefixes: ["202", "203", "205", "207", "209", "2087", "2088"],
    nationalNumberLength: 10,
  },
  {
    type: "mobile",
    prefixes: ["30"],
    nationalNumberLength: 9,
  },
];
