//Since the task is small fetch to make API calls would be the good option 
//Else, I prefer axios for its additional features and convenience.
async function fetchTodos() {
    try{
const response = await fetch("https://jsonplaceholder.typicode.com/todos")
if (response.ok){
    const todos = await response.json(); //conveting response to json

    //To get first five todos from data
    const firstFiveTodos = todos.slice(0, 5);
    console.log(firstFiveTodos)
}
else {
    throw new Error('Bad Network response');
}
    }
    catch{
        console.error('fetch Data Error:', error);
    }
}