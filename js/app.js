console.log('sanity check')

const btn = document.querySelector('button')
  console.log(btn)

btn.addEventListener('click', function(event){
    const toDoLi = document.createElement('Li')

    const input = document.querySelector('input')

    toDoLi.textContent = input.value
    // if (input.value = "") {

    document.querySelector('ul').appendChild(toDoLi)
    input.value = ""
    // }

    console.log(toDoLi)

})

const reBtn =document.querySelector('reset')
  console.log(reBtn)







//   document.querySelector('ul').addEventListener('click', handleClick)

// function handleClick(event) {
//     event.target.style.color = 'blue'

// }