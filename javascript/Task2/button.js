//creating and adding h1 element
const text = document.createElement("h1");
//Adding text to h1
text.textContent = "myText";
text.id = "myText";
//Append the h1 to the body
document.body.appendChild(text);


//creating and adding button element
const button = document.createElement("button");
//Adding texty to the button
button.textContent = "Change Text";
//Append the button to the body
document.body.appendChild(button);


button.addEventListener("click", function(){
    const changeTextElement = document.getElementById("myText");
    changeTextElement.textContent ="Hello, Check!"
})

