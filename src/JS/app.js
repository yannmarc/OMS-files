const addBtn = document.getElementById('global-add');
const addDropdown = document.querySelector('.add-dropdown');

const newBtn = document.getElementById('new-customer');
const modalContainer = document.querySelector('.modal-section');

const closeBtn = document.querySelector('.bi-x-circle');

addBtn.addEventListener('click', () =>{
    addDropdown.classList.toggle('show');
})

newBtn.addEventListener('click', () => {
    modalContainer.classList.add('show');
    console.log("Hello Javascr")
});

closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})
