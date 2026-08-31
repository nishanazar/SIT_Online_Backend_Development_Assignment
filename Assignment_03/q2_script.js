let heading = document.getElementById("title")
let paragraphe = document.getElementById("message")
let button = document.getElementById("showBtn")

document.write("Hello This is DOM manipulation example")

button.onclick = function (){
    alert(heading.innerText);
    console.log(paragraphe.innerHTML);
    
}

