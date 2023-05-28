const btn = document.querySelector('.btn')
const input = document.getElementById('input')
const divPai = document.querySelector('.div-tarefas')



btn.addEventListener('click', function(){


    const divTask = document.createElement('div')
        divTask.classList.add('task')
        divPai.appendChild(divTask)

        function criacaoParagrafo(){
            const valorInput = input.value
            
                let paragrafoTask = document.createElement('p')
                    divTask.appendChild(paragrafoTask)
                    paragrafoTask.innerText = valorInput

                    function botaoCheck(){
                        let imgCheckedButton = document.createElement('img')
                        divTask.appendChild(imgCheckedButton)
                        imgCheckedButton.classList.add('img-task')
                        imgCheckedButton.src = 'icons/check.png' 
                        
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
                    botaoCheck()
                    
                    function botaoDelete(){
                    let imgTrashButton = document.createElement('img')
                        divTask.appendChild(imgTrashButton)
                        imgTrashButton.classList.add('img-task-trash')
                        imgTrashButton.src = 'icons/trash.png'
            
                        imgTrashButton.addEventListener('click', function removerElemento(){
                            divPai.removeChild(divTask)
                        })
                    }
                        botaoDelete()
            }
            criacaoParagrafo()



    

})