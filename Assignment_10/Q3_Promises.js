
function registerStudent(name, seatAvailable) {
    return new Promise(function(resolve, reject) {

        if (seatAvailable) {
            resolve(name + " registered successfully!");
        } else {
            reject(name + " registration failed. No seat available.");
        }

    });
}

// Case 1: Seat is available
registerStudent("Ali", true)
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error);
    });

// Case 2: No seat is available
registerStudent("Ahmed", false)
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error);
    });
