const btn = document.querySelectorAll('button')

const myModal = btn[0];
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const tooltipTriggerList = document.querySelectorAll('button')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const alertPlaceholder = document.getElementById('alertPlaceholder');
const alertButton = document.getElementById('showAlert');

let alertVisible = false; 

alertButton.addEventListener('click', () => {
  if (!alertVisible) {
    alertPlaceholder.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Успех!</strong> Это Bootstrap-алерт.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    alertVisible = true;
  } else {
    alertPlaceholder.innerHTML = ''; 
    alertVisible = false;
  }
});


alertPlaceholder.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-close')) {
    alertVisible = false;
  }
});
