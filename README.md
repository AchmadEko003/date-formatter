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
```

### Mask options

| Mask             | Description                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `d`              | Day of the month as digits; no leading zero for single-digit days.                                                                                            |
| `dd`             | Day of the month as digits; leading zero for single-digit days.                                                                                               |
| `ddd`            | Day of the week as a three-letter abbreviation.                                                                                                               |
| `DDD`            | "Ysd", "Tdy" or "Tmw" if date lies within these three days. Else fall back to ddd.                                                                            |
| `dddd`           | Day of the week as its full name.                                                                                                                             |
| `DDDD`           | "Yesterday", "Today" or "Tomorrow" if date lies within these three days. Else fall back to dddd.                                                              |
| `m`              | Month as digits; no leading zero for single-digit months.                                                                                                     |
| `mm`             | Month as digits; leading zero for single-digit months.                                                                                                        |
| `mmm`            | Month as a three-letter abbreviation.                                                                                                                         |
| `mmmm`           | Month as its full name.                                                                                                                                       |
| `yy`             | Year as last two digits; leading zero for years less than 10.                                                                                                 |
| `yyyy`           | Year represented by four digits.                                                                                                                              |
| `h`              | Hours; no leading zero for single-digit hours (12-hour clock).                                                                                                |
| `hh`             | Hours; leading zero for single-digit hours (12-hour clock).                                                                                                   |
| `H`              | Hours; no leading zero for single-digit hours (24-hour clock).                                                                                                |
| `HH`             | Hours; leading zero for single-digit hours (24-hour clock).                                                                                                   |
| `M`              | Minutes; no leading zero for single-digit minutes.                                                                                                            |
| `MM`             | Minutes; leading zero for single-digit minutes.                                                                                                               |
| `N`              | ISO 8601 numeric representation of the day of the week.                                                                                                       |
| `o`              | GMT/UTC timezone offset, e.g. -0500 or +0230.                                                                                                                 |
| `p`              | GMT/UTC timezone offset, e.g. -05:00 or +02:30.                                                                                                               |
| `s`              | Seconds; no leading zero for single-digit seconds.                                                                                                            |
| `ss`             | Seconds; leading zero for single-digit seconds.                                                                                                               |
| `S`              | The date's ordinal suffix (st, nd, rd, or th). Works well with `d`.                                                                                           |
| `l`              | Milliseconds; gives 3 digits.                                                                                                                                 |
| `L`              | Milliseconds; gives 2 digits.                                                                                                                                 |
| `t`              | Lowercase, single-character time marker string: a or p.                                                                                                       |
| `tt`             | Lowercase, two-character time marker string: am or pm.                                                                                                        |
| `T`              | Uppercase, single-character time marker string: A or P.                                                                                                       |
| `TT`             | Uppercase, two-character time marker string: AM or PM.                                                                                                        |
| `W`              | ISO 8601 week number of the year, e.g. 4, 42                                                                                                                  |
| `WW`             | ISO 8601 week number of the year, leading zero for single-digit, e.g. 04, 42                                                                                  |
| `Z`              | US timezone abbreviation, e.g. EST or MDT. For non-US timezones, the GMT/UTC offset is returned, e.g. GMT-0500                                                |
| `'...'`, `"..."` | Literal character sequence. Surrounding quotes are removed.                                                                                                   |
| `UTC:`           | Must be the first four characters of the mask. Converts the date from local time to UTC/GMT/Zulu time before applying the mask. The "UTC:" prefix is removed. |
