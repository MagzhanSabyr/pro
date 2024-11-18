
const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = [{
    title: 'Note 1 note',
    completed: true
},{
    title: 'Note 2 note',
    completed: false
} ];

function getNoteTemplate(value, index){
    listElement.insertAdjacentHTML('beforeend',`<li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span class="${value.completed ? 'text-decoration-line-through' : ''}">${value.title}</span>
        <span>
        <span class="btn btn-small btn-${ value.completed ? 'warning' : 'success'}" data-index = "${index}" data-type="toggle" >&check;</span>
        <span class="btn btn-small btn-danger" data-index = "${index}" data-type="remove" >&times;</span>
        </span>
    </li>`);
}

function render(){
    listElement.innerHTML = '';
    if(notes.length == 0){
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        getNoteTemplate(notes[i], i)
    }
}
render();

listElement.onclick = function(event){
    // console.log(event.target.dataset.index);
    if(event.target.dataset.index){
        const index = parseInt(event.target.dataset.index);
        const type = event.target.dataset.type;

        if(type == 'toggle'){
            notes[index].completed = !notes[index].completed;
        }else if(type == 'remove') {
            notes.splice(index, 1);
        }
        render();
    }
}

createBtn.onclick = function(){
    // listElement.innerHTML = 

    const newNote = {
        title :inputElement.value,
        completed : false,
    }
    if(inputElement.value.length === 0 ){
        return;
    }

    notes.push(newNote);
    render(notes);

    inputElement.value ='';


}


