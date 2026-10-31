// API URL
const API_URL = "https://dummyjson.com/products";

// Get HTML Container
const productsContainer = document.getElementById("productsContainer");


// Fetch API using GET Method

fetch(API_URL)

    // First Step: Check Response
    .then(function(response) {

        // Show Status Code in Console
        console.log("Status Code:", response.status);

        // Check if response is successful
        if (!response.ok) {

            throw new Error("Failed to load products!");

        }

        // Convert Response into JSON
        return response.json();

    })


    // Second Step: Get Products Data
    .then(function(data) {

        // Access Products Array
        const products = data.products;

        // Log First Product Brand
        console.log("First Product Brand:", products[0].brand);

        // Clear Loading Message
        productsContainer.innerHTML = "";

        // Display At Least Six Products
        products.slice(0, 6).forEach(function(product) {

            // Create Product Card
            const card = document.createElement("div");

            card.className = "product-card";


            // Product Image
            if (product.thumbnail) {

                const image = document.createElement("img");

                image.src = product.thumbnail;

                image.alt = product.title;

                card.appendChild(image);

            }


            // Product Title
            const title = document.createElement("h3");

            title.innerText = product.title;


            // Product Brand
            const brand = document.createElement("p");

            brand.innerText = "Brand: " + (product.brand || "Not Available");


            // Product Price
            const price = document.createElement("p");

            price.innerText = "Price: $" + product.price;

            price.className = "price";


            // Add Elements to Card
            card.appendChild(title);

            card.appendChild(brand);

            card.appendChild(price);


            // Add Card to Container
            productsContainer.appendChild(card);

        });

    })


    // Third Step: Handle Errors
    .catch(function(error) {

        console.log("Error:", error);

        productsContainer.innerHTML = "Error loading products!";

    });