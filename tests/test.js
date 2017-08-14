const chai = require('chai');
const expect = chai.expect
const vowelCounter = require('../function.js');


describe('vowelCounter', function(){
  it('should be a function.', function(){
    expect(typeof vowelCounter).to.equal('function');
  });
  it('should return an error for inputs that are not a string.', function(){
    expect(vowelCounter(3) instanceof Error).to.equal(true);
    expect(vowelCounter(true) instanceof Error).to.equal(true);
    expect(vowelCounter(['hello','world']) instanceof Error).to.equal(true);
    expect(vowelCounter({'hello':'world'}) instanceof Error).to.equal(true);
  });
  it('should not count "Y" as a vowel.', function(){
    expect(vowelCounter('yYyYyYyY')).to.equal(0);
  });
  it('should return the number of vowels in a string.', function(){
    expect(vowelCounter('')).to.equal(0);
    expect(vowelCounter('crwth')).to.equal(0);
    expect(vowelCounter('aeiouAEIOU')).to.equal(10);
    expect(vowelCounter('hello world!')).to.equal(3);
    expect(vowelCounter('HELLO WORLD!')).to.equal(3);
    expect(vowelCounter('The quick, brown fox jumped over the lazy dog.')).to.equal(12);
  });
});
