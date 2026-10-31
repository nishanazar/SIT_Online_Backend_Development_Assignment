// API URL
const API_URL = "https://dummyjson.com/recipes";

// Get HTML Elements
const recipesContainer = document.getElementById("recipesContainer");

const status = document.getElementById("status");


// =================================
// 1. GET RECIPES USING FETCH
// =================================

async function getRecipes() {

    // Show Loading Message
    recipesContainer.innerHTML = "Loading recipes...";

    status.innerText = "Please wait...";

    try {

        // Send GET Request to API
        const response = await fetch(API_URL);

        // Display Status Code in Console
        console.log("HTTP Status Code:", response.status);

        // Display Status Code on Page
        status.innerText = "HTTP Status Code: " + response.status;


        // Check Response
        if (!response.ok) {

            throw new Error("Failed to load recipes!");

        }


        // Convert Response into JSON
        const data = await response.json();


        // Get Recipes Array
        const recipes = data.recipes;


        // Clear Loading Message
        recipesContainer.innerHTML = "";


        // Display First Six Recipes
        recipes.slice(0, 6).forEach(function(recipe) {


            // Create Recipe Card
            const card = document.createElement("div");

            card.className = "recipe-card";


            // Recipe Image
            const image = document.createElement("img");

            image.src = recipe.image;

            image.alt = recipe.name;


            // Recipe Name
            const name = document.createElement("h2");

            name.innerText = recipe.name;


            // Recipe Cuisine
            const cuisine = document.createElement("p");

            cuisine.innerText = "Cuisine: " + recipe.cuisine;


            // Preparation Time
            const time = document.createElement("p");

            time.innerText = "Preparation Time: " +
                (recipe.prepTimeMinutes ?? "Not Available") +
                (recipe.prepTimeMinutes != null ? " minutes" : "");


            // Details Button
            const detailsBtn = document.createElement("button");

            detailsBtn.innerText = "View Ingredients";


            // Ingredients Container
            const ingredientsDiv = document.createElement("div");

            ingredientsDiv.className = "ingredients";

            // Initially Hide Ingredients
            ingredientsDiv.style.display = "none";


            // Button Click Event
            detailsBtn.onclick = function() {

                // Check if ingredients are hidden
                if (ingredientsDiv.style.display === "none") {

                    // Show Ingredients
                    ingredientsDiv.style.display = "block";

                    detailsBtn.innerText = "Hide Ingredients";


                    // Create Heading
                    const heading = document.createElement("h3");

                    heading.innerText = "Ingredients:";

                    ingredientsDiv.appendChild(heading);


                    // Create Ingredients List
                    const ul = document.createElement("ul");


                    // Display Every Ingredient
                    recipe.ingredients.forEach(function(item) {

                        const li = document.createElement("li");

                        li.innerText = item;

                        ul.appendChild(li);

                    });


                    ingredientsDiv.appendChild(ul);

                }

                else {

                    // Hide Ingredients
                    ingredientsDiv.style.display = "none";

                    detailsBtn.innerText = "View Ingredients";

                }

            };


            // Add Elements to Card
            card.appendChild(image);

            card.appendChild(name);

            card.appendChild(cuisine);

            card.appendChild(time);

            card.appendChild(detailsBtn);

            card.appendChild(ingredientsDiv);


            // Add Card to Page
            recipesContainer.appendChild(card);


        });


        // Success Message
        status.innerText =
            "HTTP Status: " + response.status +
            " | Recipes loaded successfully!";


    }

    catch (error) {

        // Display Error
        console.log("Error:", error);

        recipesContainer.innerHTML =
            "Sorry! Recipes could not be loaded.";

        status.innerText = "Error: " + error.message;

    }

}


// =================================
// 2. LOAD RECIPES ON PAGE START
// =================================

getRecipes();