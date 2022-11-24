# date-formatter

A package for formatting date function.

## Installation

```bash
$ npm install @achmadeko003/date-formatter
```

## Usage

Date format:

```js
import dateFormat from "@achmadeko003/date-formatter";

// Basic usage
dateFormat("dd mmmm yyyy", "2022-01-01");
// 01 January 2022

// Month and year only
dateFormat("mmmm yyyy", "2022-01-01");
// January 2022

// Date and month only
dateFormat("dd mmmm", "2022-01-01");
// 01 January

// You can also change format separator
// Space separator
dateFormat("dddd mmmm yyyy", "2022-01-01");
// Saturday January 2022

// Dash separator
dateFormat("dddd-mmmm-yyyy", "2022-01-01");
// Saturday-January-2022

// Slash separator
dateFormat("dddd/mmmm/yyyy", "2022-01-01");
// Saturday/January/2022

// Dot separator
dateFormat("dddd.mmmm.yyyy", "2022-01-01");
// Saturday.January.2022

// Note that if you don't include the date value,
// dateFormat use the current date
dateFormat("dd mmmm yyyy");
// 01 January 2022
```

Other:

```js
// Next 1 or more date
nextBackDate("n", 1, "2022-10-02")
// 2022-10-03T00:00:00.000Z

// Back 1 or more date
nextBackDate("b", 1, "2022-10-01")
// 2022-10-01T00:00:00.000Z

// Note if you don't include the date value,
// nextBackDate use current date
nextBackDate("n", 1)
// 2022-10-03T00:00:00.000Z

// Next 1 or more month
nextBackMonth("n", 1, "2022-10-02")
// 2022-11-02T00:00:00.000Z

// Back 1 or more month
nextBackMonth("b", 1, "2022-10-02")
// 2022-09-02T00:00:00.000Z

// Note if you don't include the date value,
// nextBackMonth use current date
nextBackMonth("n", 1)
// 2022-11-02T00:00:00.000Z

// Check if value Date or not
isDate(new Date())
// true

// Get month name
dayMonthName('month', 2)
// February

// Get day name
dayMonthName('day', '2022-10-01')
// Saturday
```

### Format options

| Format             | Description                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `d`              | Day of the month as digits; no leading zero for single-digit days. |
| `dd`             | Day of the month as digits; leading zero for single-digit days. |
| `ddd`            | Day of the week as a three-letter abbreviation. |
| `dddd`           | Day of the week as its full name. |
| `m`              | Month as digits; no leading zero for single-digit months. |
| `mm`             | Month as digits; leading zero for single-digit months. |
| `mmm`            | Month as a three-letter abbreviation. |
| `mmmm`           | Month as its full name. |
| `yy`             | Year as last two digits; leading zero for years less than 10. |
| `yyyy`           | Year represented by four digits. |
| `h`              | Hours; no leading zero for single-digit hours (12-hour clock). |
| `hh`             | Hours; leading zero for single-digit hours (12-hour clock). |
| `H`              | Hours; no leading zero for single-digit hours (24-hour clock). |
| `HH`             | Hours; leading zero for single-digit hours (24-hour clock). |
| `M`              | Minutes; no leading zero for single-digit minutes. |
| `MM`             | Minutes; leading zero for single-digit minutes. |
| `s`              | Seconds; no leading zero for single-digit seconds. |
| `ss`             | Seconds; leading zero for single-digit seconds. |
| `T`              | Uppercase, single-character time marker string: A or P. |
| `TT`             | Uppercase, two-character time marker string: AM or PM. |
