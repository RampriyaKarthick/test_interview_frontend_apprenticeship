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
button.id = "changeTextButton";
//Append the button to the body
document.body.appendChild(button);


button.addEventListener("click", function(){
    const changeTextElement = document.getElementById("myText");
    changeTextElement.textContent ="Hello, Check!";
    button.disabled = true;
})

//if button needs to toggle between the text "myText" and "Hello, Check", comment the above EL for button and the following EL can be used
// button.addEventListener("click", function(){
//     const changeTextElement = document.getElementById("myText");
//     if (changeTextElement.textContent === "myText") {
//         changeTextElement.textContent = "Hello, Check!";
//     } else {
//         changeTextElement.textContent = "myText";
//     }
// })

