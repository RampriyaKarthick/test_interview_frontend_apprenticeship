//Since the task is small fetch to make API calls would be the good option 
//Else, I prefer axios for its additional features and convenience.
async function fetchTodos() {
    try{
const response = await fetch("https://jsonplaceholder.typicode.com/todos")
if (response.ok){
    const todos = await response.json(); //converting response to json

    //To get first five todos from data
    const firstFiveTodos = todos.slice(0, 5);
    console.log(firstFiveTodos)
    const unOrderedList = document.createElement("ul");
    firstFiveTodos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        unOrderedList.appendChild(li);  //appending the list to ul unOrderedList
        unOrderedList.id ="unOrderedList"  //id for unOrdered list

        const fiveTodos = document.getElementById('todo-list-container');
        fiveTodos.appendChild(unOrderedList);  //appending the unOrderedList to the container
    });
}
else {
    throw new Error('Bad Network response');
}
    }
    catch(error){
        console.error('fetch Data Error:', error);
    }
}

fetchTodos(); //function call