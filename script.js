const baseURL = "https://fakestoreapi.com/products";
let itemsArray = [];

// Event listener for Add button
document.getElementById("addButton").addEventListener("click", addItem);

// Fetch and render the initial list
getList();

function getList() {
  fetch(baseURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then((data) => {
      itemsArray = data;
      renderUL();
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function renderUL() {
  const ul = document.getElementById("items");
  ul.innerHTML = ""; // Clear existing list

  itemsArray.forEach((item) => {
    const li = document.createElement("li");
    li.id = `item${item.id}`;
    li.className = "new-item";

    li.innerHTML = `
      <p>
        <input type="text" readonly placeholder="Text here..." value="${item.title}" />
      </p>
      <div>
        <button class="toggleButton editMode" onclick="toggleEditSave(this)" id="edit${item.id}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="vertical-align: middle;">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </button>
        <button class="toggleButton saveMode" onclick="toggleEditSave(this)" id="save${item.id}" style="display: none;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="vertical-align: middle;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>
        </button>
        <button class="deleteButton" onclick="deleteItem(this)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </div>
    `;
  
    ul.appendChild(li);
  });
}

function toggleEditSave(button) {
  const li = button.closest("li");
  const input = li.querySelector("input[type='text']");
  const editButton = li.querySelector(".editMode");
  const saveButton = li.querySelector(".saveMode");

  if (button === editButton) {
    input.removeAttribute("readonly");
    input.focus();
    editButton.style.display = "none";
    saveButton.style.display = "inline-block";
  } else if (button === saveButton) {
    input.setAttribute("readonly", true);
    saveButton.style.display = "none";
    editButton.style.display = "inline-block";
  }

  updateButtonsState();
}

function updateButtonsState() {
  const allEditButtons = document.querySelectorAll(".editMode");
  const allSaveButtons = document.querySelectorAll(".saveMode");

  allEditButtons.forEach(btn => btn.disabled = false);
  allSaveButtons.forEach(btn => btn.disabled = false);
}

function deleteItem(button) {
  const li = button.closest("li");
  const itemId = parseInt(li.id.replace('item', ''), 10);
  itemsArray = itemsArray.filter(item => item.id !== itemId); // Remove item from array
  renderUL(); // Update UI
}

function addItem() {
  const input = document.getElementById("newItemTitle");
  const title = input.value.trim();

  if (title) {
    const newItem = {
      id: itemsArray.length ? Math.max(...itemsArray.map(item => item.id)) + 1 : 1, // Generate new ID
      title: title
    };

    itemsArray.push(newItem);
    renderUL();
    input.value = "";
  } else {
    console.log("Item title is empty. Please enter a valid title.");
  }
}
