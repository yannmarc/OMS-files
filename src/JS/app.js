const addBtn = document.getElementById('global-add');
const addDropdown = document.querySelector('.add-dropdown');

const newBtn = document.querySelector('.new');
const modalContainer = document.querySelector('.modal-section');

addBtn.addEventListener('click', () =>{
    addDropdown.classList.toggle('show');
})

newBtn.addEventListener('click', () => {
    modalContainer.classList.add('show');
    console.log("Hello Javascr")
})
