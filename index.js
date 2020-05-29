// selectors 

let todoInput = document.querySelector('.to-do-input');
let todobutton = document.querySelector('.to-do-button');
let todoList = document.querySelector('.to-do-list');

// event listner
todobutton.addEventListener('click',addToDo);
todoList.addEventListener('click',deleteCheck);


// function

function addToDo(event){
    event.preventDefault();

    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // li 
    const newTODO =     document.createElement('li');
    newTODO.innerText = todoInput.value;
    newTODO.classList.add('to-do-item');
    todoDiv.appendChild(newTODO);
    // check btn 
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check-square"></i>';
    doneButton.classList.add('done-Btn');
    todoDiv.appendChild(doneButton);
    // delete btn 
    const delButton = document.createElement('button');
    delButton.innerHTML = '<i class="fas fa-trash"></i>';
    delButton.classList.add('del-Btn');
    todoDiv.appendChild(delButton);
    //add up the list
    todoList.appendChild(todoDiv);
    todoInput.value = '';
}

function deleteCheck(e){
    // delete the list
 let item = e.target;
 if(item.classList[0] == 'del-Btn'){
    let todoList = item.parentElement;
    todoList.classList.add('fall');
    todoList.addEventListener('transitionend',()=>{
        todoList.remove();
    })
    
 }

 // check mark the list

 if(item.classList[0] == 'done-Btn'){
console.log('d');
      let todoList = item.parentElement;
      todoList.classList.toggle('done');
 }

}