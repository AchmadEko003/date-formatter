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

### Named Formats

| Name              | Mask                           | Example                  |
| ----------------- | ------------------------------ | ------------------------ |
| `default`         | `ddd mmm dd yyyy HH:MM:ss`     | Sat Jun 09 2007 17:46:21 |
| `shortDate`       | `m/d/yy`                       | 6/9/07                   |
| `paddedShortDate` | `mm/dd/yyyy`                   | 06/09/2007               |
| `mediumDate`      | `mmm d, yyyy`                  | Jun 9, 2007              |
| `longDate`        | `mmmm d, yyyy`                 | June 9, 2007             |
| `fullDate`        | `dddd, mmmm d, yyyy`           | Saturday, June 9, 2007   |
| `shortTime`       | `h:MM TT`                      | 5:46 PM                  |
| `mediumTime`      | `h:MM:ss TT`                   | 5:46:21 PM               |
| `longTime`        | `h:MM:ss TT Z`                 | 5:46:21 PM EST           |
| `isoDate`         | `yyyy-mm-dd`                   | 2007-06-09               |
| `isoTime`         | `HH:MM:ss`                     | 17:46:21                 |
| `isoDateTime`     | `yyyy-mm-dd'T'HH:MM:sso`       | 2007-06-09T17:46:21+0700 |
| `isoUtcDateTime`  | `UTC:yyyy-mm-dd'T'HH:MM:ss'Z'` | 2007-06-09T22:46:21Z     |

### Localization

Day names, month names and the AM/PM indicators can be localized by
passing an object with the necessary strings. For example:

```js
import { i18n } from "dateformat";

i18n.dayNames = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

i18n.monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

i18n.timeNames = ["a", "p", "am", "pm", "A", "P", "AM", "PM"];
```

> Notice that only one language is supported at a time and all strings
> _must_ be present in the new value.

### Breaking change in 2.1.0

- 2.1.0 was published with a breaking change, for those using localized strings.
- 2.2.0 has been published without the change, to keep packages refering to ^2.0.0 to continue working. This is now branch v2_2.
- 3.0.\* contains the localized AM/PM change.

## License

(c) 2007-2009 Steven Levithan [stevenlevithan.com][stevenlevithan], MIT license.

[dateformat]: http://blog.stevenlevithan.com/archives/date-time-format
[stevenlevithan]: http://stevenlevithan.com/