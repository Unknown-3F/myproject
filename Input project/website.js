let addbtn = document.getElementById("addButton");
addbtn.addEventListener('click', addname);
let createul = document.getElementById("createul");


// for adding..
function addname(event) {
    if (createul.children[0].className == "newEmptyMsg") {
        createul.children[0].remove();
    }
    let currentBtn = event.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let inputName = currentInput.value;

    let createli = document.createElement('li');
    createli.className = "list-group-item d-flex justify-content-between"

    createli.innerHTML = `<h4 class="flex-grow-1">${inputName}</h4>
    <button id="editButton" class="btn btn-outline-warning mx-3 "onclick = "editList(this)">Edit</button>
    <button id="removeButton" class="btn btn-outline-danger" onclick = "removeList(this)">Delete</button>`
    createul.appendChild(createli);

}


// for deleting
function removeList(element) {
    element.parentElement.remove();
    let createul = document.getElementById("createul");

    if (createul.children.length <= 0) {
        let emptyMsg = document.createElement("h3");
        emptyMsg.classList.add("newEmptyMsg");
        emptyMsg.textContent = "Enter anything"
        createul.appendChild(emptyMsg);
    }
}

// for edting
function editList(currentElement) {
    if (currentElement.textContent == "Done") {
        currentElement.textContent = "Edit";
        let currChapterName = currentElement.previousElementSibling.value;
        let currentHeading = document.createElement('h3');
        currentHeading.className = "flex-grow-1";
        currentHeading.textContent = currChapterName;
        currentElement.parentElement.replaceChild(currentHeading, currentElement.previousElementSibling)

    }
    else {
        currentElement.textContent = "Done";
        let currChapterName = currentElement.previousElementSibling.textContent;
        let currentInput = document.createElement('input');
        currentInput.type = "text";
        currentInput.placeholder = "Enter name";
        currentInput.className = "form-control";
        currentInput.value = currChapterName;
        currentElement.parentElement.replaceChild(currentInput, currentElement.previousElementSibling)
    }

}