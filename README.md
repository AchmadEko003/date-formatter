# date-formatter

A package for formatting date function.

## Installation

```bash
$ npm install @achmadeko003/date-formatter
```

## Usage

Date format:

```js
import format from "@achmadeko003/date-formatter";

// Basic usage
format.dateISOFormat("dd mmmm yyyy", "2022-01-01");
// 01 January 2022

// Month and year only
format.dateISOFormat("mmmm yyyy", "2022-01-01");
// January 2022

// Date and month only
format.dateISOFormat("dd mmmm", "2022-01-01");
// 01 January

// You can also change format separator
// Space separator
format.dateISOFormat("dddd mmmm yyyy", "2022-01-01");
// Saturday January 2022

// Dash separator
format.dateISOFormat("dddd-mmmm-yyyy", "2022-01-01");
// Saturday-January-2022

// Slash separator
format.dateISOFormat("dddd/mmmm/yyyy", "2022-01-01");
// Saturday/January/2022

// Dot separator
format.dateISOFormat("dddd.mmmm.yyyy", "2022-01-01");
// Saturday.January.2022

// Note that if you don't include the date value,
// dateISOFormat use the current date
format.dateISOFormat("dd mmmm yyyy");
// 01 January 2022
```

Time Format:

```js
import format from "@achmadeko003/date-formatter";

// Basic usage
format.timeFormat("HH:MM:ss", "16:20:10");
// 16:20:10

// Hour and minutes
format.timeFormat("HH:MM", "16:20");
// 16:20

// For 12-Clock
// Basic usage
format.timeFormat("hh:MM:ss", "16:20:10");
// 04:20:10 PM

// Hour and minutes
format.timeFormat("hh:MM", "16:20");
// 04:20 PM

// Note that if you don't include the date value,
// timeFormat use the current time
format.timeFormat("HH:MM:ss");
// 16:20:10
```

Other:

```js
import format from "@achmadeko003/date-formatter";

// Next 1 or more date
format.nextBackDate("n", 1, "2022-10-02")
// 2022-10-03T00:00:00.000Z

// Back 1 or more date
format.nextBackDate("b", 1, "2022-10-01")
// 2022-10-01T00:00:00.000Z

// Note if you don't include the date value,
// nextBackDate use current date
format.nextBackDate("n", 1)
// 2022-10-03T00:00:00.000Z

// Next 1 or more month
format.nextBackMonth("n", 1, "2022-10-02")
// 2022-11-02T00:00:00.000Z

// Back 1 or more month
format.nextBackMonth("b", 1, "2022-10-02")
// 2022-09-02T00:00:00.000Z

// Note if you don't include the date value,
// nextBackMonth use current date
format.nextBackMonth("n", 1)
// 2022-11-02T00:00:00.000Z

// Check if value Date or not
format.isDate(new Date())
// true

// Get month name
format.dayMonthName('month', 2)
// February

// Get day name
format.dayMonthName('day', '2022-10-01')
// Saturday

// Get first date of month
format.firstOrLastMonth('first', '2022-01-01')
// 2022-01-01T14:14:24.668Z

// Get last date of month
format.firstOrLastMonth('last', '2022-01-01')
// 2022-01-31T14:14:24.668Z

// Get first and last date of month
format.firstOrLastMonth('firstlast', '2022-01-01')
// ["2022-01-01T14:14:24.668Z", "2022-01-31T14:14:24.668Z"]
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
