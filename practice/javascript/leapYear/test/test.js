var code = require('../main');
var expect = require('chai').expect;

describe('Leap Year', function(){
  it('Should be perfectly divisble by 4', function(){
    expect(code.leapYear(2000)).to.equal("leap year!");
  });
  it('Should be divisible by 100 as well as 400', function(){
    expect(code.leapYear(1700)).to.equal("not leap year");
  });
  it('Should not be the century years 1700, 1800, or 1900', function() {
    expect(code.leapYear(1800)).to.equal("not leap year");
  });
});