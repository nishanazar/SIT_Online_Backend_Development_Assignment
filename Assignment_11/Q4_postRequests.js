const API_URL = "https://jsonplaceholder.typicode.com/posts";

const postForm = document.getElementById("postForm");
const output = document.getElementById("output");


// Reusable function for all API requests
async function request(url, method, body = null) {

    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    // JSON.stringify() converts a JavaScript object into JSON text.
    // Content-Type tells the server that we are sending JSON data.
    if (body !== null) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    console.log("HTTP Status Code:", response.status);

    // Read the response body as text, then convert it to JSON if present.
    const responseText = await response.text();
    const data = responseText ? JSON.parse(responseText) : null;

    if (!response.ok) {
        throw new Error("Request failed. Status: " + response.status);
    }

    return {
        status: response.status,
        data: data
    };
}


// Display API response on the webpage
function showResponse(result) {
    output.textContent =
        "Status Code: " + result.status + "\n\n" +
        "Returned Response:\n" +
        JSON.stringify(result.data, null, 2);
}


// Get values from the form
function getPostData() {
    return {
        title: document.getElementById("title").value,
        body: document.getElementById("content").value,
        userId: Number(document.getElementById("userId").value)
    };
}


// 1. POST - Create a new post
postForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    try {
        const postData = getPostData();

        const result = await request(
            API_URL,
            "POST",
            postData
        );

        showResponse(result);

        output.textContent += "\n\nReturned ID: " + result.data.id;

    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
});


// 2. PUT - Replace the complete post
document.getElementById("putBtn").addEventListener("click", async function() {

    try {
        const postData = getPostData();

        const result = await request(
            API_URL + "/1",
            "PUT",
            {
                id: 1,
                title: postData.title,
                body: postData.body,
                userId: postData.userId
            }
        );

        showResponse(result);

    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
});


// 3. PATCH - Update only the title
document.getElementById("patchBtn").addEventListener("click", async function() {

    try {
        const newTitle = document.getElementById("title").value;

        const result = await request(
            API_URL + "/1",
            "PATCH",
            {
                title: newTitle
            }
        );

        showResponse(result);

    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
});


// 4. DELETE - Delete post with ID 1
document.getElementById("deleteBtn").addEventListener("click", async function() {

    try {
        const result = await request(
            API_URL + "/1",
            "DELETE"
        );

        showResponse(result);

    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
});