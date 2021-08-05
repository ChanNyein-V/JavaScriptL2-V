// UI
const addbtn = document.getElementById('add');

// Event Listener
addbtn.addEventListener('click', addnewnote);

function addnewnote(text=''){
    // console.log('hay')'
    const note = document.createElement('div');
    note.classList.add('note');
    // console.log(note);

    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
    `;

    // console.log(note);

    document.body.appendChild(note);
}