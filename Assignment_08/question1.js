
const orders = [1200, 450, 3000, 750, 1500, 250, 4200, 900];


console.log("Original Orders:", orders);


const firstOrder = orders.find(order => order > 2000);
console.log("First Order Greater Than 2000:", firstOrder);


const filteredOrders = orders.filter(order => order > 1000);
console.log("Orders Greater Than 1000:", filteredOrders);


const totalOrders = orders.reduce((total, order) => total + order, 0);
console.log("Total Sales:", totalOrders);