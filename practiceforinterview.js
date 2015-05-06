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

var is_prime = function (num) {
    for (i = 1; i< 10; ++i) {
        if (num === 2) {
            return true;
        }
        else if (num % i === 0 ) {
            return false;
        }
        else {
            return true;
        }
    }
};

var prim_fact = function (nmbr) {
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    var i = 2;
    if (nmbr % 2 === 0) {
        num1 = nmbr / 2;
    }
    if (is_prime(num1)) {
        return num1;
    }
    while (i < num1) {
        if (num1 % i === 0) {
            num2 = num1 / i;
        }
        else {
            ++i;
        }
        if (is_prime(num2)) {
            return num2;
        }
        else {
            num2 = num1;
        }
        ++i;
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
