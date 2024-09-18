// import trash from '../assets/icons/Frame.svg'
function getForm() {
  const form = document.querySelector('form');
  const input = document.getElementById("add-item-input");
  const ul = document.getElementById("list-items");
  let value = '';
  let items = ['sardinha','ketchup'];

  input.addEventListener('input', () => {
    value = input.value;
  });

  form.onsubmit = (e) => {
    e.preventDefault();
    items.push(value);
    input.value = '';
    renderItems(items);
  };

  function renderItems(items) {
    ul.innerHTML = ''; 
    items.forEach((item) => {
      const li = document.createElement('li');
      const p = document.createElement('p');
      const trashButton = document.createElement('button');
      const inputCheckbox = document.createElement('input')
      const alert = document.getElementById('alert')
      alert.style.display = 'none';

      const img = document.createElement('img')
      img.src = '../assets/icons/Frame.svg';
      trashButton.classList.add('trash-button')

      inputCheckbox.type='checkbox'
      li.classList.add("item");
      p.textContent = item;
      // trashButton.textContent = trash;

      trashButton.addEventListener('click', () => {
        items.splice(items.indexOf(item), 1);
        renderItems(items);
        alert.style.display = 'flex';
        setTimeout(() => {
          alert.style.display = 'none';
        }, 2000);

      });

      li.appendChild(inputCheckbox,p,trashButton);
      li.appendChild(p);
      li.appendChild(trashButton);
      trashButton.appendChild(img)

      ul.appendChild(li);
    });
  }

  // Initial render (if there are any items in the array)
  renderItems(items);
}
export function form() {
  getForm()
}



