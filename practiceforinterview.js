/**
 * Created by callie on 5/5/15.
 */


// multiples of 3 & 5, return sum
var sum3_5 = function () {
    var sum = 0;
    for (i = 1; i <= 1000; ++i) {
        if ((i % 3 === 0 || i % 5 === 0) && (i % 3 === 0 && i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
};



// even fibonacci numbers, finding the sum
var evenFib = function () {
    var FibNum = 1;
    var sum = 0;
    for (i = 0; i <=10000; ++i) {
        FibNum += i +3;
        if (FibNum % 2 === 0 ) {
            sum++;
        }
    }
    return sum;
};


// largest prime factor

var primFactor = function () {
    var nmbr = 600851475143;
    var largPrimNum = 0;
    var primNum = [];
    for (i = 1; i <= nmbr; ++i) {
        if ( nmbr % i === 0 ) {
            if (i % 2 !== 0 || i % 3 !== 0 || i % 4 !== 0 || i % 5 !== 0 || i % 6 !== 0 || i % 7 !== 0 || i % 8 !== 0 || i % 9 !== 0 || i % 10 !== 0 || i % 11 !== 0) {
                primNum.push(i);
            }
        }
    }
    return primNum;
};

