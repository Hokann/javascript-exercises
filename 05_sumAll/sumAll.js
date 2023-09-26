const sumAll = function(int1, int2) {
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return 'ERROR';
    if (int1<0 || int2<0) return 'ERROR';
    let sum = 0;
    for (let i=Math.min(int1,int2); i<=Math.max(int1,int2); i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
