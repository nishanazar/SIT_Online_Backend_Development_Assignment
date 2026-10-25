// Q2 — Order Processing Sequence
// Part 1: Using Nested Callbacks

function prepareOrder(callback) {
    console.log("Order preparation started");

    setTimeout(function() {
        console.log("Order preparation finished");
        callback();
    }, 1000);
}

function packOrder(callback) {
    console.log("Order packing started");

    setTimeout(function() {
        console.log("Order packing finished");
        callback();
    }, 1000);
}

function notifyCustomer() {
    console.log("Customer notification started");

    setTimeout(function() {
        console.log("Customer notified successfully");
        console.log("Order completed");
    }, 1000);
}

// Calling functions using nested callbacks
prepareOrder(function() {
    packOrder(function() {
        notifyCustomer();
    });
});


// Part 2: Using Promises

function prepareOrder() {
    return new Promise(function(resolve) {
        console.log("Order preparation started");

        setTimeout(function() {
            console.log("Order preparation finished");
            resolve();
        }, 1000);
    });
}

function packOrder() {
    return new Promise(function(resolve) {
        console.log("Order packing started");

        setTimeout(function() {
            console.log("Order packing finished");
            resolve();
        }, 1000);
    });
}

function notifyCustomer() {
    return new Promise(function(resolve) {
        console.log("Customer notification started");

        setTimeout(function() {
            console.log("Customer notified successfully");
            resolve();
        }, 1000);
    });
}

// Calling functions using Promise chaining
prepareOrder()
    .then(function() {
        return packOrder();
    })
    .then(function() {
        return notifyCustomer();
    })
    .then(function() {
        console.log("Order completed");
    });

    