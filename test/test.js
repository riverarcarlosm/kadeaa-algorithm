var assert = require("assert");
var kadeaa = require("../app/kadeaa");

describe("testing algorithm", function() {
  it("print numbers from 1 to 3: 1 2 Kadeaa", function() {
    assert.equal(kadeaa.init(3), "1 2 Kadeaa");
  });
  it("print numbers from 1 to 10: 1 2 Kadeaa 4 IT Kadeaa 7 8 Kadeaa IT", function() {
    assert.equal(kadeaa.init(10), "1 2 Kadeaa 4 IT Kadeaa 7 8 Kadeaa IT");
  });
  it("print numbers from 1 to 15: 1 2 Kadeaa 4 IT Kadeaa 7 8 Kadeaa IT 11 Kadeaa 13 14 Kadeeans", function() {
    assert.equal(
      kadeaa.init(15),
      "1 2 Kadeaa 4 IT Kadeaa 7 8 Kadeaa IT 11 Kadeaa 13 14 Kadeeans"
    );
  });
});
