/**
 * Created by callie on 5/5/15.
 */


// multiples of 3 & 5, return sum
var sum3_5 = function () {
    var sum = 0;
    for (i = 0; i <= 100; ++i) {
        if (i % 3 === 0 || i % 5 === 0) {
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

console.log(evenFib());

