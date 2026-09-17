
let n = parseInt(prompt("Enter a number:"))


for (let row = 1; row <= n; row++) {

    let rowText = "";

    for (let num = 1; num <= row; num++) {
        rowText += num;
    }
    console.log(rowText);

}
