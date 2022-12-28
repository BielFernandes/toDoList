const btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    const input = document.getElementById('input')
    const task = document.querySelector('.div-tarefas')  
    
    function criarDivTask(){
        const div = document.createElement('div')
        const createImgCheck = document.createElement('img')
        const createImgTrash = document.createElement('img')

            createImgTrash.src = 'icons/trash.png'
            createImgCheck.src = 'icons/check.png'

            createImgTrash.classList = 'img-task'
            createImgCheck.classList = 'img-task'
            div.classList = 'task'

            div.innerHTML = '<p>' + input.value + '</p>'

            div.appendChild(createImgCheck)
            div.appendChild(createImgTrash)
            task.appendChild(div)


                function interatividadeTask (){
            createImgCheck.addEventListener('click', function(){
                if(div.style.textDecoration != 'line-through'){
                    div.style.textDecoration = 'line-through'
                } else {
                    div.style.textDecoration = 'solid'
                }
            })
        
            createImgTrash.addEventListener('click', function(){
                if (div.style.display != 'none'){
                    div.style.display = 'none'
                }
            })
        }

    interatividadeTask()
    }


criarDivTask()
})