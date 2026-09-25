// Question 5: Mini Array Management Program
// Product List Manager

// Starting Data
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];

// 1. Display the number of products using length
console.log(products.length);

// 2. Display the first and last product using at()
console.log(products.at(0));
console.log(products.at(-1));

// 3. Add a product using push()
products.push("Speaker");
console.log(products);

// 4. Add another product using unshift()
products.unshift("Webcam");
console.log(products);

// 5. Remove the last product using pop()
products.pop();
console.log(products);

// 6. Remove the first product using shift()
products.shift();
console.log(products);

// 7. Create a second product array
let second_products = ["USB Cable", "Charger", "Power Bank"];

// Combine both arrays using concat()
let all_products = products.concat(second_products);
console.log(all_products);

// 8. Use slice() to create a smaller list
let small_list = all_products.slice(1, 4);
console.log(small_list);

// 9. Use splice() to replace a product
all_products.splice(2, 1, "Gaming Keyboard");
console.log(all_products);

// 10. Use join() to display the final product list as a string
let final_list = all_products.join(" - ");
console.log(final_list);

// 11. Arrow function to display the final array
let showProducts = (array) => {
    console.log(array);
};

showProducts(all_products);

// 12. Use Array.isArray() to verify the final product list
console.log(Array.isArray(all_products));