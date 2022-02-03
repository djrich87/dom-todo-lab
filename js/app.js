console.log('sanity check')



const btn = document.querySelector('button')

btn.addEventListener('click', function(event){
    const toDoLi = document.createElement('Li')
    const input = document.querySelector('input')
    toDoLi.textContent = input.value
    document.querySelector('ul').appendChild(toDoLi)
    input.value = ""
    
    console.log(toDoLi)
})

