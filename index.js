// #region Date Variable
const months = [
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
const shortMonths = [
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
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const symbols = ["-", "/", " ", "_", ",", "."];
// #endregion

const PururuDate = class PururuDate {
  /** Check value is date or not
   * @param {*} payload value to get checked
   * @returns {Boolean} true | false
   * @example
   * var date = '2022-01-01'
   * if (PururuDate.isDate(date)) { //Check if date variable is date or not
   *  ...
   * }
   */
  static isDate(payload) {
    if (typeof payload === "number") {
      return false;
    }

    if (typeof payload === "string") {
      return false;
    }

    const result = new Date(payload);
    return isNaN(result) ? false : result > 0;
  }

  /** Menambahkan atau mengurangkan beberapa Bulan.
   * @param
   * (next/back, number next or back, date) => ('n', 1, 2022-10-10)
   * @type
   * n = Next month
   * b = Backward month
   */
  static nextBackMonth(type, numberDate, date = null) {
    const tempDate = date ? new Date(date) : new Date();

    let month = 0;

    if (type === "n") {
      month = tempDate.getMonth() + numberDate;
    } else {
      month = tempDate.getMonth() - numberDate;
    }

    tempDate.setMonth(month);
    return tempDate;
  }

  /** Menambahkan atau mengurangkan beberapa hari.
   * @param
   * (next/back, number next or back, date) => ('n', 1, 2022-10-10)
   * @type
   * n = Next date
   * b = Backward date
   */
  static nextBackDate(type, numberDate, date = null) {
    const tempDate = date ? new Date(date) : new Date();

    let dateRes = 0;

    if (type === "n") {
      dateRes = tempDate.getDate() + numberDate;
    } else {
      dateRes = tempDate.getDate() - numberDate;
    }

    tempDate.setDate(dateRes);
    return tempDate;
  }

  /** Get first, last, first last date
   * @param {String} type set type value needed. ex: first, last or first and last date.
   * @param {Date} date date value for first, last or first and last value
   * @returns {Date|Array} Date type value or array value for first and last type
   * @example
   * var month = PururuDate.firstOrLastMonth('f', '2022-01-01');
   *
   * @note
   *
   * 'f' => Get first date on month
   *
   * 'l' => Get last date on month
   *
   * 'fl' => Get first and last date on month (return array)
   */
  static firstOrLastMonth(type, date = null) {
    let tempDate = null;

    if (date) {
      tempDate = new Date(date);
    } else {
      tempDate = new Date();
    }

    const year = tempDate.getFullYear();
    const month = tempDate.getMonth();

    if (type === "f") {
      return new Date(year, month, 1);
    } else if (type === "l") {
      return new Date(year, month + 1, 0);
    } else if (type === "fl") {
      return [new Date(year, month, 1), new Date(year, month + 1, 0)];
    }
  }

  /** Get day or month name
   * @param {String} type 'day' | 'month'
   * @param {Date|Number} date date | number/date
   * @returns string name of day or month
   * @example
   * var date = PururuDate.dayMonthName('day', 2020-01-01);
   */
  static dayMonthName(type, date) {
    let tempParam = null;

    try {
      if (type === "month") {
        if (typeof date === "number") {
          tempParam = date - 1;
        } else {
          tempParam = date ? new Date(date).getMonth() : new Date().getMonth();
        }
      } else {
        tempParam = date ? new Date(date) : new Date();
      }

      if (type === "month") {
        return months[tempParam];
      }
      return days[tempParam.getDay()];
    } catch (e) {
      return e || "Date not match";
    }
  }

  /** Formatting date
   * @param {String} format format date needed
   * @param {Date} date date value that will formatted
   * @returns {String} date with ISOString format
   * @example
   * var date = PururuDate.dateFormat('dd mmmm yyyy', '2022-01-01');
   *
   * @note
   *
   * - Day
   *
   * d = 1 digit without zero,
   *
   * dd = 2 digit with zero,
   *
   * ddd = 3 letter name month,
   *
   * dddd = Full letter name month
   *
   * - Month
   *
   * m = 1 digit without zero,
   *
   * mm = 2 digit with zero,
   *
   * mmm = 3 letter name month,
   *
   * mmmm = Full letter name month
   *
   * - Year
   *
   * yy = 2 last two zero,
   *
   * yyyy = Full length year
   */
  static dateFormat(format, date) {
    let tempSeparator = "";
    const dateRes = [];
    const tempDate = date ? new Date(date) : new Date();

    tempSeparator = symbols.filter((type) => {
      const ds = format.includes(type);
      return ds === true;
    })[0];

    if (!symbols.includes(tempSeparator)) {
      return "Format not match";
    }

    const formatFormula = format.split(tempSeparator);
    formatFormula.forEach((element) => {
      dateRes.push(dFormattingType(tempDate, element));
    });

    return dateRes.join(tempSeparator);
  }

  /** Formatting time
   * @parameter
   * (HH:MM:ss)
   *
   * @hour
   * h = Without zero in single-digits Hour (12-hour clock),
   * hh = Add zero in single-digits Hour (12-hour clock),
   * H = Without zero in single-digits Hour (24-hour clock),
   * HH = Add zero in single-digits Hour (24-hour clock)
   *
   * @minutes
   * M = Without zero in single-digits Minutes,
   * MM = Add zero in single-digits Minutes
   *
   * @seconds
   * s = Without zero in single-digits Seconds,
   * ss = Add zero in single-digits Seconds
   */
  static timeFormat(format, date = null) {
    const timeRes = [];
    const arrFormat = format.split(":");

    const tempTime = new Date(date);
    // const tempTime = date ? new Date(date) : new Date()

    arrFormat.forEach((element) => {
      timeRes.push(tFormattingType(tempTime, element));
    });

    if (arrFormat[0] === "h" || arrFormat[0] === "hh") {
      return tTo12Convert(timeRes.join(":"), arrFormat[0] === "hh");
    }

    return timeRes.join(":");
  }
}

function dFormattingType(payload, type) {
  const char = type.charAt(0).toLowerCase();

  if (char === "d") {
    if (type === "dddd") {
      return days[payload.getDay()];
    } else if (type === "ddd") {
      return shortDays[payload.getDay()];
    } else if (type === "dd") {
      return setZero(payload.getDate());
    } else {
      return parseInt(payload.getDate());
    }
  }

  if (char === "m") {
    if (type === "mmmm") {
      return months[payload.getMonth()];
    } else if (type === "mmm") {
      return shortMonths[payload.getMonth()];
    } else if (type === "mm") {
      return setZero(payload.getMonth() + 1);
    } else {
      return parseInt(payload.getMonth() + 1);
    }
  }

  if (char === "y") {
    if (type === "yyyy") {
      return payload.getFullYear();
    } else {
      return parseInt(payload.getFullYear().toString().slice(-2));
    }
  }
}

function tFormattingType(payload, type) {
  const char = type.charAt(0).toLowerCase();

  if (char === "h") {
    return setZero(payload.getHours());
  }

  if (char === "m") {
    if (type === "M") {
      return payload.getMinutes();
    } else if (type === "MM") {
      return setZero(payload.getMinutes());
    }
  }

  if (char === "s") {
    if (type === "s") {
      return payload.getSeconds();
    } else if (type === "ss") {
      return setZero(payload.getSeconds());
    }
  }
}

// Convert time 24 to 12
function tTo12Convert(time, twoDigit) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }

  if (twoDigit) {
    time[0] = setZero(time[0]);
  }

  return time.join(""); // return adjusted time or original string
}

// Add zero before number
function setZero(payload) {
  if (payload < 10) {
    return `0${payload}`;
  }

  return payload;
}

module.exports = PururuDate