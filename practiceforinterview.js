/**
 * Created by callie on 5/5/15.
 */


// multiples of 3 & 5, return sum
var sum3_5 = function () {
    var sum = 0;
    for (i = 1; i < 1000; ++i) {
        if ((i % 3 === 0 || i % 5 === 0) || (i % 3 === 0 && i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
};



// even fibonacci numbers, finding the sum
var evenFib = function () {
    var f2 = 2;
    var sum = 2;
    var f1 = 1;
    while (sum < 4000000) {
        f1 = f1 + f2;
        if (f2 % 2 === 0 ) {
            sum = sum + f1;
        }
        else if ( f2 % 2 === 0) {
            sum = sum + f2;
        }
    }
    return sum;
};


// largest prime factor

var primFactor = function () {
    var nmbr = 81 /*600851475143*/;
    var largPrimNum = 0;
    var primNum = [];
    for (i = 2; i < nmbr; ++i) { //loops through all numbers
        var prm = false;
        for (j = 2; j < i; ++j) {  // loops through those
            if ( nmbr % i === 0 ) { // checks for numbers that the main# is divisible by
                if (i % j !== 0) {  // if they are prime, set prm as true
                    prm = true;
                }
            if  (prm === true) { // add to array
                    primNum.push(i);
                 }
            }
        }
    }
    primNum.sort();
    largPrimNum = primNum.pop();
    return largPrimNum;
};


// largest palindrome product

var palindrome = function () {
    var product = 1;

    for (i = 100; i < 1000; i ++i) {
        var tempValue = i * i +1;
        if () {}
    }
};
