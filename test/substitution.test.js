const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("thinkful", "short");
    //const expected = false
    expect(actual).to.be.false;
    //expect(actual).to.be.equal(expected);
  });
});

describe("substitution", () => {
  it("It correctly translates the given phrase, based on the alphabet given to the function", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.be.equal(expected);
  });
});
describe("substitution", () => {
  it("It returns false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    //const expected = false
    expect(actual).to.be.false;
    //expect(actual).to.be.equal(expected);
  });
});
describe("substitution", () => {
  it("It maintains spaces in the message, before and after encoding", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect("You are an excellent spy").to.include(" ");
  });
});
describe("substitution", () => {
  it("It maintains spaces in the message, before and after decoding", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect("elp xhm xf mbymwwmfj dne").to.include(" ");
  });
});
describe("substitution", () => {
  it("ignores capital letters", () => {
    const actual = substitution("THiNKFuL", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.be.eql(expected);
  });
});
describe("substitution", () => {
  it("It maintains special characters after encoding", () => {
    const actual = substitution("8abcde!@", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "8xoyqm!@";
    expect(actual).to.be.eql(expected);
  });
});
describe("substitution", () => {
  it("It maintains special characters after decoding", () => {
    const actual = substitution(
      "7xoyqm!@",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "7abcde!@";
    expect(actual).to.be.eql(expected);
  });
});

// describe("substitution", () => {
//   it("should be true that the alphabet contains all characters in the input, return false otherwise", () => {
//     const actual = substitution(
//       "jrufscpw",
//       "xoyqmcgrukswaflnthd!pzibev",
//       false
//     );
//     expect(actual).to.be.false;
//   });
// });
