var assert = require("assert"),
    isInteger = require("../src/index");


describe("isInteger", function() {
    it("should return true when the value is a integer", function() {
        assert.equal(isInteger(null), false);
        assert.equal(isInteger(12345), true);
        assert.equal(isInteger(0.12345), false);
    });
});
