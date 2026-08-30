# is_laos_phone_number

[![npm version](https://img.shields.io/npm/v/is_laos_phone_number.svg)](https://www.npmjs.com/package/is_laos_phone_number)
[![license](https://img.shields.io/npm/l/is_laos_phone_number.svg)](https://www.npmjs.com/package/is_laos_phone_number)

**is_laos_phone_number** is a lightweight Node.js package for strict validation of Lao phone numbers.

## Features

- Validates fixed-line and mobile ranges in the versioned Lao numbering registry.
- Accepts compact national (`0…`) and international (`856…`, `+856…`) forms.
- Rejects spaces, separators, non-digits, malformed country codes, and unallocated prefixes.

## Installation

Install the package via npm:

```bash
npm install is_laos_phone_number
```

## Usage
After installation, you can use the package as follows:

```ts
import { verify } from "is_laos_phone_number";

verify("+8562059158789"); // true
verify("02059158789"); // true
verify("020-59158789"); // false: separators are not normalized
```

## Accepted formats

Pass a compact number only. The validator accepts a local number beginning with
`0`, an international number beginning with `856`, or an E.164-style number
beginning with `+856`. It validates the number against the package's versioned
registry of currently supported Lao fixed-line and mobile ranges.

For every supported range, use one of these equivalent forms:

| Form | Example |
| --- | --- |
| Local | `02059158789` |
| International digits | `8562059158789` |
| E.164-style | `+8562059158789` |

The leading local `0` is removed before matching a prefix. The prefix and
lengths below therefore describe the national-significant number after that
leading `0` (and after `856` in international forms).

## Supported prefix registry

| Type | National-significant prefix | Required national-significant length | Local form starts with | International form starts with |
| --- | --- | ---: | --- | --- |
| Fixed line | `21` | 8 digits | `021…` | `+85621…` |
| Mobile | `202`, `203`, `205`, `207`, `209` | 10 digits | `0202…`, `0203…`, `0205…`, `0207…`, `0209…` | `+856202…`, `+856203…`, `+856205…`, `+856207…`, `+856209…` |
| Mobile | `2087`, `2088` | 10 digits | `02087…`, `02088…` | `+8562087…`, `+8562088…` |
| Mobile | `30` | 9 digits | `030…` | `+85630…` |

For example, `02059158789` contains the `205` mobile prefix and has a
10-digit national-significant number. A number may have a documented prefix
but still be rejected if its total length does not match the registry.

The registry is reviewed for each release and records the sources used for its
prefix and length rules. It currently includes the familiar nationwide `20`
mobile, `21` fixed-line, and `30` mobile/WinPhone-style families, based on the
[ITU Lao national numbering-plan notice](https://www.itu.int/dms_pub/itu-t/oth/02/02/T02020000750001PDFE.pdf)
and [Lao Telecom's current international-calling guidance](https://ltc.laotel.com/ProductAndService/Index/17?cate=s2).

## Breaking change

This version no longer accepts arbitrary eight-digit strings, legacy seven-digit
mobile subscriber numbers, or bare national-significant numbers without `0`.
