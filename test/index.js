var tape = require("tape"),
    isInteger = require("..");


tape("isInteger(value) should return true when the value is a integer", function(assert) {
    assert.equal(isInteger(null), false);
    assert.equal(isInteger(12345), true);
    assert.equal(isInteger(0.12345), false);
    assert.end();
});
