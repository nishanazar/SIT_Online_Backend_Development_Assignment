// API URL
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// HTML Elements
const postForm = document.getElementById("postForm");
const postsContainer = document.getElementById("postsContainer");
const reloadBtn = document.getElementById("reloadBtn");
const message = document.getElementById("message");

// Store posts in an array
let posts = [];


// =================================
// 1. GET - Load Posts
// =================================

async function getPosts() {

    postsContainer.innerHTML = "Loading posts...";

    try {

        const response = await fetch(API_URL + "?_limit=6");

        console.log("GET Status:", response.status);

        if (!response.ok) {
            throw new Error("Failed to load posts");
        }

        const data = await response.json();

        posts = data;

        displayPosts();

        message.innerText = "Posts loaded successfully!";
        message.style.color = "green";

    } catch (error) {

        postsContainer.innerHTML = "Error loading posts.";

        message.innerText = error.message;
        message.style.color = "red";

    }

}


// =================================
// 2. DISPLAY POSTS
// =================================

function displayPosts() {

    postsContainer.innerHTML = "";

    posts.forEach(function(post) {

        // Create Post Card
        const card = document.createElement("div");

        card.className = "post-card";

        // Post ID
        const id = document.createElement("p");
        id.textContent = "Post ID: " + post.id;

        // User ID
        const user = document.createElement("p");
        user.textContent = "User ID: " + post.userId;

        // Post Title
        const title = document.createElement("h3");
        title.textContent = post.title;

        // Post Body
        const body = document.createElement("p");
        body.textContent = post.body;

        // Title Input
        const titleInput = document.createElement("input");
        titleInput.value = post.title;
        titleInput.placeholder = "Edit title";

        // Body Input
        const bodyInput = document.createElement("textarea");
        bodyInput.value = post.body;
        bodyInput.placeholder = "Edit body";

        // User ID Input
        const userInput = document.createElement("input");
        userInput.type = "number";
        userInput.value = post.userId;
        userInput.placeholder = "Edit user ID";


        // PUT Button
        const putBtn = document.createElement("button");
        putBtn.innerText = "PUT - Update Full Post";

        putBtn.onclick = function() {

            updatePost(
                post.id,
                titleInput.value,
                bodyInput.value,
                userInput.value
            );

        };


        // PATCH Title Button
        const patchTitleBtn = document.createElement("button");
        patchTitleBtn.innerText = "PATCH - Title";

        patchTitleBtn.onclick = function() {

            patchPost(post.id, {
                title: titleInput.value
            });

        };


        // PATCH Body Button
        const patchBodyBtn = document.createElement("button");
        patchBodyBtn.innerText = "PATCH - Body";

        patchBodyBtn.onclick = function() {

            patchPost(post.id, {
                body: bodyInput.value
            });

        };


        // DELETE Button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "DELETE";
        deleteBtn.className = "delete-btn";

        deleteBtn.onclick = function() {

            deletePost(post.id);

        };


        // Add everything to card
        card.appendChild(id);
        card.appendChild(user);
        card.appendChild(title);
        card.appendChild(body);

        card.appendChild(titleInput);
        card.appendChild(bodyInput);
        card.appendChild(userInput);

        card.appendChild(putBtn);
        card.appendChild(patchTitleBtn);
        card.appendChild(patchBodyBtn);
        card.appendChild(deleteBtn);

        postsContainer.appendChild(card);

    });

}


// =================================
// 3. POST - Add New Post
// =================================

postForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const newPost = {

        title: document.getElementById("title").value,

        userId: Number(document.getElementById("userId").value),

        body: document.getElementById("body").value

    };

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newPost)

        });

        console.log("POST Status:", response.status);

        if (!response.ok) {
            throw new Error("Post could not be added");
        }

        const data = await response.json();

        // Add new post to local array
        posts.unshift(data);

        displayPosts();

        message.innerText = "Post added successfully!";
        message.style.color = "green";

        postForm.reset();

    } catch (error) {

        message.innerText = error.message;
        message.style.color = "red";

    }

});


// =================================
// 4. PUT - Update Full Post
// =================================

async function updatePost(id, title, body, userId) {

    const updatedPost = {

        id: id,
        title: title,
        body: body,
        userId: Number(userId)

    };

    try {

        const response = await fetch(API_URL + "/" + id, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(updatedPost)

        });

        console.log("PUT Status:", response.status);

        if (!response.ok) {
            throw new Error("Post update failed");
        }

        const data = await response.json();

        // Update local array
        posts = posts.map(function(post) {

            if (post.id === id) {
                return data;
            }

            return post;

        });

        displayPosts();

        message.innerText = "Post updated successfully!";
        message.style.color = "green";

    } catch (error) {

        message.innerText = error.message;
        message.style.color = "red";

    }

}


// =================================
// 5. PATCH - Update Title or Body
// =================================

async function patchPost(id, updatedData) {

    try {

        const response = await fetch(API_URL + "/" + id, {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(updatedData)

        });

        console.log("PATCH Status:", response.status);

        if (!response.ok) {
            throw new Error("Post update failed");
        }

        const data = await response.json();

        // Update local array
        posts = posts.map(function(post) {

            if (post.id === id) {

                return {
                    ...post,
                    ...data
                };

            }

            return post;

        });

        displayPosts();

        message.innerText = "Post updated successfully!";
        message.style.color = "green";

    } catch (error) {

        message.innerText = error.message;
        message.style.color = "red";

    }

}


// =================================
// 6. DELETE - Delete Post
// =================================

async function deletePost(id) {

    try {

        const response = await fetch(API_URL + "/" + id, {

            method: "DELETE"

        });

        console.log("DELETE Status:", response.status);

        if (!response.ok) {
            throw new Error("Post deletion failed");
        }

        // Remove post from local array
        posts = posts.filter(function(post) {

            return post.id !== id;

        });

        displayPosts();

        message.innerText = "Post deleted successfully!";
        message.style.color = "green";

    } catch (error) {

        message.innerText = error.message;
        message.style.color = "red";

    }

}


// =================================
// 7. RELOAD BUTTON
// =================================

reloadBtn.addEventListener("click", function() {

    getPosts();

});


// =================================
// 8. Load Posts On Page Start
// =================================

getPosts();