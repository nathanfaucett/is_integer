var isNumber = require("is_number");


module.exports = isInteger;


function isInteger(obj) {
    return isNumber(obj) && obj % 1 === 0;
}
