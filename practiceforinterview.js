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

console.log(sum3_5());


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
    for (i = 1; i <= nmbr; ++i) {
        if ( nmbr % i === 0 ) {

        }
    }
};

