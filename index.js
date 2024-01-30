const FORM = document.querySelector('#FORM');
FORM.addEventListener('click',(evt)=>{
    evt.preventDefault()
})

const lists = document.querySelector('.lists');
const text = document.querySelector('.text');

//when clicked send button
const send = document.querySelector('.send');
send.addEventListener('click', ()=>{
    newList(text.value, lists);
    text.value='';
})

//make new list function. -It goes to "send" btn event listener-
const newList = (text, place)=>{
    const list = document.createElement('li')
    list.innerText = text;
    place.appendChild(list)
    addDelBtn(list, text)
}

//add delete button on "make new list function".
const addDelBtn = (elem)=>{
    const button = document.createElement('button');
    button.innerText="DELETE"
    elem.appendChild(button);
}

//when clicked delete button
lists.addEventListener('click',(evt)=>{
    if(evt.target.tagName === 'BUTTON'){
     const deletedLi = evt.target.closest('li');
    deletedLi.remove()
    }
 })