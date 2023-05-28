const btn = document.querySelector('.btn')
const input = document.getElementById('input')

function criarElemento(){

const divPai = document.querySelector('.div-tarefas')

const valorInput = input.value

let divTask = document.createElement('div')
    divTask.classList.add('task')
    divPai.appendChild(divTask)

let paragrafoTask = document.createElement('p')
    divTask.appendChild(paragrafoTask)
    paragrafoTask.innerText = valorInput

let imgCheckedButton = document.createElement('img')
    divTask.appendChild(imgCheckedButton)
    imgCheckedButton.classList.add('img-task')
    imgCheckedButton.src = 'icons/check.png'
    
let imgTrashButton = document.createElement('img')
    divTask.appendChild(imgTrashButton)
    imgTrashButton.classList.add('img-task-trash')
    imgTrashButton.src = 'icons/trash.png'

    
    imgTrashButton.addEventListener('click', function(){
        removerElemento(divPai, divTask)
    })
    
    imgCheckedButton.addEventListener('click', function(){
        if(paragrafoTask.style.textDecoration != 'line-through'){
            paragrafoTask.style.textDecoration = 'line-through'
            paragrafoTask.style.color = 'grey'
            paragrafoTask.style.fontStyle = 'italic'

        } else {
            paragrafoTask.style.textDecoration = 'solid'
            paragrafoTask.style.color = 'black'
            paragrafoTask.style.fontStyle = 'normal'

        }

    })
}

function removerElemento(elementoPai, elementoFilho){
    elementoPai.removeChild(elementoFilho)
}




btn.addEventListener('click', function(){


criarElemento()

    

})