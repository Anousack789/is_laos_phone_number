# is_laos_phone_number

[![npm version](https://img.shields.io/npm/v/is_laos_phone_number.svg)](https://www.npmjs.com/package/is_laos_phone_number)
[![license](https://img.shields.io/npm/l/is_laos_phone_number.svg)](https://www.npmjs.com/package/is_laos_phone_number)

**is_laos_phone_number** is a lightweight Node.js package that verifies whether a given phone number is valid as per the Laos phone number format. This package ensures that the input conforms to the Lao numbering standards, helping to validate user input efficiently.

## Features

- Validates phone numbers that adhere to the Laos format.
- Supports phone numbers beginning with the country code (+856).
- Lightweight and easy integration with any Node.js project.
- Provides proper error handling for non-numeric and invalid formats.

## Installation

Install the package via npm:

```bash
npm install is_laos_phone_number
```

## Usage
After installation, you can use the package as follows:

```bash
import { verify } from  "is_laos_phone_number";
// or
import * as isLaosPhoneNumber from "is_laos_phone_number";

// Example of a valid Laos phone number
const  phoneNumber  =  '+85620XXXXXXXX';

const  isValid  =  isLaosPhoneNumber.verify(phoneNumber);

if (isValid) {
	console.log('The phone number is valid!');
}  else  {
	console.log('Invalid Laos phone number.');
}
```