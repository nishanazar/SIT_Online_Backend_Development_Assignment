
let tickets = [
    {
        id: 101,
        customerName: "Ali",
        status: "Open"
    },
    {
        id: 102,
        customerName: "Ahmed",
        status: "In Progress"
    },
    {
        id: 103,
        customerName: "Sara",
        status: "Resolved"
    }
];

// Function to get ticket data
function getTicket(ticketId) {
    return new Promise(function(resolve, reject) {

        console.log("Loading ticket details...");

        setTimeout(function() {
            let foundTicket = null;

            // Search for the ticket
            for (let i = 0; i < tickets.length; i++) {
                if (tickets[i].id === ticketId) {
                    foundTicket = tickets[i];
                    break;
                }
            }

            if (foundTicket !== null) {
                resolve(foundTicket);
            } else {
                reject("Ticket not found! Please check the ticket ID.");
            }

        }, 2000);
    });
}

// Function to display ticket details
async function checkTicket() {
    try {
        let ticket = await getTicket(103);

        console.log("Ticket ID:", ticket.id);
        console.log("Customer Name:", ticket.customerName);
        console.log("Ticket Status:", ticket.status);

    } catch (error) {
        console.log("Error:", error);
    }
}

// Check the ticket
checkTicket();
