let userIdInput = ""

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
    "title": "delectus aut autem!!!",
    "completed": false
}]


let arrayUserOnly = []
let arrayCompleted = []
let arrayUncompleted = []


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

const storeUserId = (val) => {
    userIdInput = val
}

const allTodos = (event) => {
    event.preventDefault()

    populateTodos(arrayOfTodos, null, null)
}

const userOnly = (event) => {
    event.preventDefault()

    arrayUserOnly = arrayOfTodos.filter( (a) => a.userId == userIdInput )

    populateTodos(arrayUserOnly, null, null)
}

const completedOnly = (event) => {
    event.preventDefault()

    arrayCompleted = arrayUserOnly.filter( (a) => a.completed === true )

    populateTodos(null, arrayCompleted, null)
}

const uncompletedOnly = (event) => {
    event.preventDefault()

    arrayUncompleted = arrayUserOnly.filter( (a) => a.completed === false )

    populateTodos(null, null, arrayUncompleted)
}

const selected = (val) => {
    userIdInput = val
    arrayUserOnly = arrayOfTodos.filter( (a) => a.userId == userIdInput )
    arrayCompleted = arrayUserOnly.filter( (a) => a.completed === true )
    arrayUncompleted = arrayUserOnly.filter( (a) => a.completed === false )

    populateTodos(arrayUserOnly, arrayCompleted, arrayUncompleted)
}

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}


const populateTodos = (allOrUser, completed, uncompleted) => {

    const olElement = document.getElementById("todo-list")
    const completedElement = document.getElementById("completed-list")
    const uncompletedElement = document.getElementById("uncompleted-list")

    removeAllChildNodes(olElement)
    removeAllChildNodes(completedElement)
    removeAllChildNodes(uncompletedElement)

    if (allOrUser) {

        for (let i = 0; i < allOrUser.length; i++) {
            const newListElement = document.createElement("li")
            const newTextNode = document.createTextNode(allOrUser[i].title)
            newListElement.appendChild(newTextNode)

            // Note that the newListElement (li) will render with a number b/c the html uses an ORDERED list
            // IF you had used an UNORDERED list instead in the html file, the newListElement (li) will render with a bullet point! 
            olElement.appendChild(newListElement)
        }
    } 
    
    if (completed) {

        for (let i = 0; i < completed.length; i++) {
            const newListElement = document.createElement("li")
            const newTextNode = document.createTextNode(completed[i].title)
            newListElement.appendChild(newTextNode)

            completedElement.appendChild(newListElement)
        }
    }

    if (uncompleted) {

        for (let i = 0; i < uncompleted.length; i++) {
            const newListElement = document.createElement("li")
            const newTextNode = document.createTextNode(uncompleted[i].title)
            newListElement.appendChild(newTextNode)

            uncompletedElement.appendChild(newListElement)
        }
    }
}