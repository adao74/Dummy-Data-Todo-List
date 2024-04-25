// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]






const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}


// NOTE: If you click the Log Todos button BEFORE you click the Fetch Todos button, the browser console should show the arrayOfTodos you defined above!  
const logTodos = () => {
    console.log(arrayOfTodos)

    console.log(arrayOfTodos[0].userId) // => 14
    console.log(arrayOfTodos[1].userId) // => 20
}

const populateTodos = () => {

    const newListElement = document.createElement("li")
    const newTextNode = document.createTextNode(arrayOfTodos[0].title)
    newListElement.appendChild(newTextNode)

    const olElement = document.getElementById("todo-list")
    // Note that the newListElement (li) will render with a number b/c the html uses an ORDERED list
    // IF you had used an UNORDERED list instead in the html file, the newListElement (li) will render with a bullet point! 
    olElement.appendChild(newListElement)

}