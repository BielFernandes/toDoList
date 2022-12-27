const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    let input = document.getElementById('input')
    let task = document.querySelector('.div-tarefas')  
    let div = document.createElement('div') // <==  .createElement() para criar nova div dentro da div de tasks (div-tarefas)
    div.innerText = input.value // <== inserindo valor do input - (.value())
    div.classList = 'task' // <== adicionando classe pre-definida a div criada
    task.appendChild(div) // <== adicionando div criada na div principal como seu filho
})