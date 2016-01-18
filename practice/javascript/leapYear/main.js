module.exports = {
  leapYear: function (year) {
    if(year % 4 === 0) {
      if(year % 100 === 0 && year % 400 === 0) {
      return "leap year!";
    }
      else if(year !== 1700 && year !== 1800 && year !== 1900) {
        return "leap year!";
      }
      else {return "not leap year";}
    }
    else {return "not leap year";}
  }
}
