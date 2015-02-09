var isNumber = require("is_number");


module.exports = function isInteger(obj) {
    return isNumber(obj) && obj % 1 === 0;
};
