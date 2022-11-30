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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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
   * next = Next month
   * b = Backward month
   */
  static nextBackMonth(type, numberDate, date = null) {
    const tempDate = date ? new Date(date) : new Date();

    let month = 0;

    if (type === "next") {
      month = tempDate.getMonth() + numberDate;
    } else {
      month = tempDate.getMonth() - numberDate;
    }

    tempDate.setMonth(month);
    return tempDate;
  }

  /** Menambahkan atau mengurangkan beberapa hari.
   * @param
   * (next/back, number next or back, date) => ('next', 1, 2022-10-10)
   * @type
   * next = Next date
   * back = Backward date
   */
  static nextBackDate(type, numberDate, date = null) {
    const tempDate = date ? new Date(date) : new Date();

    let dateRes = 0;

    if (type === "next") {
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
   * var month = PururuDate.firstOrLastMonth('first', '2022-01-01');
   *
   * @note
   *
   * 'first' => Get first date on month
   *
   * 'last' => Get last date on month
   *
   * 'firstlast' => Get first and last date on month (return array)
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

    if (type === "first") {
      return new Date(year, month, 1);
    } else if (type === "last") {
      return new Date(year, month + 1, 0);
    } else if (type === "firstlast") {
      return [new Date(year, month, 1), new Date(year, month + 1, 0)];
    } else {
      return "Format not valid";
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
  static dateISOFormat(format, date = new Date()) {
    try {
      const dateRes = [];
      if (!PururuDate.isDate(date)) {
        date = date.includes("T") ? date.split("T")[0] : date;
        date = new Date(date.replaceAll(getSeparator(date), "/"));
      }

      const dateConvertRes = setDateParams(date);

      const tempSeparator = symbols.filter((type) => {
        const ds = format.includes(type);
        return ds === true;
      })[0];

      if (!symbols.includes(tempSeparator)) {
        return "Format not match";
      }

      format.split(tempSeparator).forEach((element) => {
        dateRes.push(dateConvertRes[element]);
      });

      return dateRes.join(tempSeparator);
    } catch (e) {
      return e;
    }
  }

  /** Formatting time
   * @param {String} format format date needed
   * @param {Date|String} time date value that will formatted
   * @returns {String} time
   * @example
   * var date = PururuDate.timeFormat('hh:MM:ss TT', '16:30');
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
  static timeFormat(format, time = null) {
    const timeRes = [];
    const timeMarker = format.includes("T") || format.includes("TT");
    const arrFormat = timeMarker
      ? format.split(" ")[0].split(":")
      : format.split(":");
    const timeFormat = time ? time.split(":") : null;

    let tempTime = new Date();
    tempTime = new Date(
      tempTime.getFullYear(),
      tempTime.getMonth(),
      tempTime.getDate(),
      timeFormat[0] ? timeFormat[0] : tempTime.getHours(),
      timeFormat[1] ? timeFormat[1] : tempTime.getMinutes(),
      timeFormat[2] ? timeFormat[2] : tempTime.getSeconds()
    );

    const tempRes = setDateParams(tempTime);

    arrFormat.forEach((element) => {
      timeRes.push(tempRes[element]);
    });

    return `${timeRes.join(":")}${timeMarker ? " " + tempRes[format.split(" ")[1]] : ""}`;
  }
};

function getSeparator(payload) {
  const dateSeparator = symbols.filter((type) => {
    return payload.includes(type) === true;
  })[0];

  return dateSeparator;
}

function setDateParams(payload) {
  date = {
    d: parseInt(payload.getDate()),
    dd: setZero(payload.getDate()),
    ddd: days[payload.getDay()].slice(0, 3),
    dddd: days[payload.getDay()],
    m: parseInt(payload.getMonth() + 1),
    mm: setZero(payload.getMonth() + 1),
    mmm: months[payload.getMonth()].slice(0, 3),
    mmmm: months[payload.getMonth()],
    yy: parseInt(payload.getFullYear().toString().slice(-2)),
    yyyy: payload.getFullYear(),
    h: parseInt(payload.getHours() % 12 || 12),
    hh: setZero(payload.getHours() % 12 || 12),
    H: parseInt(payload.getHours()),
    HH: setZero(payload.getHours()),
    M: parseInt(payload.getMinutes()),
    MM: setZero(payload.getMinutes()),
    s: parseInt(payload.getSeconds()),
    ss: setZero(payload.getSeconds()),
    T: payload.getHours() < 12 ? "A" : "P",
    TT: payload.getHours() < 12 ? "AM" : "PM",
  };

  return date;
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

module.exports = PururuDate;
