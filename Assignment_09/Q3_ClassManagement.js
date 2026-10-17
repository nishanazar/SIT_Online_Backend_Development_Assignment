
const groupA = ["Ali", "Ahmed", "Hamza"];
const groupB = ["Sara", "Ayesha", "Laiba"];

const profile = {
    name: "Nisha",
    className: "Web Development",
    city: "Karachi"
};

// 1. Combine both groups
const combinedList = [...groupA, ...groupB];


const copiedGroupA = [...groupA];
copiedGroupA.push("Usman");


const updatedProfile = { ...profile, city: "Lahore" };


const profileWithEmail = {
    ...profile,
    email: "Nisha@example.com"
};

// 5. Display original and updated data
console.log("Original Group A: " + groupA);
console.log("Original Group B: " + groupB);
console.log("Combined List: " + combinedList);
console.log("Copied Group A: " + copiedGroupA);

console.log("Original Profile: ", profile);
console.log("Updated Profile: ", updatedProfile);
console.log("Profile With Email: ", profileWithEmail);
