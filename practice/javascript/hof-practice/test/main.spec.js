//requiring assert means that the tests are mocha, assert library

var assert = require('assert'),
  main = require('../main');

describe('Main', function() {
  describe('.dogNames()', function(){
    it('returns an array of just the names of the dogs', function() {
      var input = [
        {name: 'Fido'},
        {name: 'Snoopy'}
      ];
      var expected = ['Fido', 'Snoopy'];
      var actual = main.dogNames(input);
      assert.equal(expected[0], actual[0])
    });
   it('returns an empty array if no imnput', function(){
    var expected = [];
    var actual = main.dogNames();
    assert.deepEqual(expected[0],actual[0]);
   });
  });

var input = [
  {name: 'Fido', size: 'small'},
  {name: 'Snoopy', size: 'medium'},
  {name: 'Clifford', size: 'large'}
];
describe('.dogSize()', function(){
  it('it returns only small dogs', function() {
    var expected = ['Fido'];
    var actual = main.dogSize(input, 'small');
    assert.deepEqual(expected, actual);
  });
  it('it returns only medium dogs', function() {
    var expected = ['Snoopy'];
    var actual = main.dogSize(input, 'medium');
    assert.deepEqual(expected, actual);
  });
  it('it returns only large dogs', function() {
    var expected = ['Clifford'];
    var actual = main.dogSize(input, 'large');
    assert.deepEqual(expected, actual);
  });
});

describe(".bySize()", function(){
  input = [
    {name: 'Fido', size: 'small'},
    {name: 'Snoopy', size: 'medium'},
    {name: 'Clifford', size: 'large'},
    {name: 'Lassie', size: 'small'},
    {name: 'Spot', size: 'medium'},
    {name: 'Fluffy', size: 'large'}
  ];
});
  it('returns dogs by size', function() {
    var expected = {
      'small': ['Fido', 'Lassie'],
      'medium': ['Snoopy', 'Spot'],
      'large': ['Clifford', 'Fluffy']
    }
    var actual = main.bySize(input);
    assert.deepEqual(expected, actual);
  });

});

