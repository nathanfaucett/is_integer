var isNumber = require("is_number");


module.exports = isInteger;


function isInteger(value) {
    return isNumber(value) && value % 1 === 0;
}
