// remove button

// document.getElementById("app").innerHTML = "<p>changed</p>"

document.getElementById('remove').addEventListener('click', () => {
  const text = "are you sure you want to remove?"
  alert(text)
})

// completed button

document.getElementById('completed').addEventListener('click', () => {
  const text = 'Thank you for completing'
  alert(text)
})

// function add(a, b) {}

// add(1, 2)

// submit
document.getElementById('todo-submit').addEventListener('click', (event) => {
  event.preventDefault()
  const input = document.getElementById("todo-input").value

  // Create new div element.
  const div = document.createElement('div')
  div.className = "todo"

  // Create the span element.
  let span = document.createElement('span')
  span.innerText = input
  div.appendChild(span)

  // Need to add remove button logic here:
  document.getElementById('remove').addEventListener(click, () => {
  remove.innerText = 'Remove'
  remove.className = 'remove'
  
  })

  //completed
  let completed = document.createElement('button')
  completed.innerText = 'Completed'
  completed.className = 'completed'
  div.appendChild(completed)

  // Append new todo to todo list.
  document.getElementById("todo-list").appendChild(div)
})