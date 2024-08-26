//Since the task is small fetch to make API calls would be the good option 
//Else, I prefer axios for its additional features and convenience.
async function fetchTodos() {
    try{
const response = await fetch("https://jsonplaceholder.typicode.com/todos")
if (response.ok){
    const data = await response.json(); //conveting response to json
}
    }
    catch{

    }
}