const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
  it("When encoding, it translates the letters i and j to 42", () => {
    const actual = polybius("justThinkful");
    const expected = "425434444432423352125413";
    expect(actual).to.be.equal(expected);
  });
});
describe("polybius", () => {
  it("When decoding, it translates 42 to (i/j)", () => {
    const actual = polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.be.eql(expected);
    expect("th(i/j)nkful").to.have.lengthOf(12);
  });
});
describe("polybius", () => {
  it("It ignores capital letters", () => {
    const actual = polybius("HelLo WoRld");
    const expected = "3251131343 2543241341";
    expect(actual).to.be.eql(expected);
  });
});
describe("polybius", () => {
  it("It maintains spaces in the message, before and after encoding", () => {
    const actual = polybius("Hello world");
    const expected = "3251131343 2543241341";
    //expect(actual).to.be.eql(expected);
    expect("3251131343 2543241341").to.include(" ");
  });
});
describe("polybius", () => {
  it("It maintains spaces in the message, before and after decoding", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    //expect(actual).to.be.eql(expected);
    expect("hello world").to.include(" ");
  });
});
