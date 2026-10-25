// Question 1 - Callback-Based Calculator and Bill

/* 1. Calculator using Callback */

function calculate(a, b, callback) {
    callback(a, b);
}

function add(num1, num2) {
    console.log("Sum =", num1 + num2);
}

calculate(10, 20, add);


/* 2. Calculate Bill using Callback */

function calculateBill(price1, price2, price3, callback) {
    callback(price1 + price2 + price3);
}

function showTotal(total) {
    console.log("Total Bill =", total);
}

calculateBill(200, 300, 500, showTotal);


/* 3. Withdraw Money using Callback */

function withdrawMoney(amount, callback) {
    let balance = 10000;

    setTimeout(function() {
        balance = balance - amount;
        callback(balance);
    }, 2000);
}

function showBalance(remainingBalance) {
    console.log("Remaining Balance =", remainingBalance);
}

withdrawMoney(2000, showBalance);
