const repeatString = function(str, num) {
    if (num > 0) return "Error";
    let printString = ""
    for (let i = 0; i < num; i++) {
      printString += str;
    }
    return printString;
};

// Do not edit below this line
module.exports = repeatString;
