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



// largest prime function
var is_prime = function (num) {
    if (num === 2) {
        return true;
    }

    for (var i = 3; i < num; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};



var prim_fact = function (nmbr) {
    var num1 = 0;
    var num2 = 0;
    var j = 2;
    var i = 2;
    if (nmbr === 2) {
        return 2;
    }
    while( i < nmbr/2) {   // if (nmbr % 2 === 0) { num1 = nmbr / 2;}
        if (nmbr % i === 0) {

            num1 = nmbr / i;
        }
        else {
            ++i;
        }
    }
    if (is_prime(num1)) {
        return num1;
    }
    while (j < num1) {
        if (num1 % j === 0) {
            num2 = num1 / j;
        }
        else {
            ++j;
            num2 = num1;
        }
        if (is_prime(num1)) {
            return num1;
        }
        else {
            num1 = num2;
        }
    }
};


// largest palindrome product

var palindrome = function () {
    var product = 1;

    for (i = 100; i < 1000; i ++i) {
        var tempValue = i * i +1;
        if () {}
    }
};
