const FORM = document.querySelector('#FORM');
FORM.addEventListener('click',(evt)=>{
    evt.preventDefault()
})

const lists = document.querySelector('.lists');
const text = document.querySelector('.text');

//when clicked send button
const send = document.querySelector('.send');
send.addEventListener('click', ()=>{
    if(text.value){
        newList(text.value, lists);
        text.value='';
    }
    
})

//make new list function. -It goes to "send" btn event listener-
const newList = (text, place)=>{
    const list = document.createElement('li')
    list.innerText = text;
    addCB(list)
    place.appendChild(list)
    addDelBtn(list)
    
}

//add checkbox fucntion on "mak new list function"
const addCB = (elem)=>{
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    elem.appendChild(checkbox)
}

//add delete button on "make new list function".
const addDelBtn = (elem)=>{
    const button = document.createElement('button');
    button.innerText="DELETE"
    button.setAttribute('id','delBtn');
    button.classList.add('blockDelBtn')
    elem.appendChild(button);
}

lists.addEventListener('click',(evt)=>{
    //when clicked delete button
    if(evt.target.tagName === 'BUTTON'){
     const deletedLi = evt.target.closest('li');
    deletedLi.remove()
    }

    //when clicked checkbox
    if(evt.target.tagName === 'INPUT'){
        const checkedLI = evt.target.closest('li');
        checkedLI.classList.toggle('checked')
        // const delBtns = document.querySelectorAll('#delBtn');
        // for(let delBtn of delBtns){
        //     if(delBtn.classList.contains('blockDelBtn')){
        //         delBtn.classList.toggle('blockDelBtn')
        //     }
        // }
    }
 })