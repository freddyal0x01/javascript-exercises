const removeFromArray = function(arr, ...args) {
    const newArr = [];

    arr.forEach((index) => {
        if(!args.includes(index)) {
            newArr.push(index);
        }
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
