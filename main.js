const toDoItems = document.getElementsByClassName("to-do-items")[0],
  input = document.getElementById("input"),
  trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addItem();
});

function addItem(){
    let divParent = document.createElement('div');
    let divChild = document.createElement('div');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fa-solid fa-square-check";
    checkIcon.style.color = '#9FD2DC';
    checkIcon.style.fontSize = '20px'
    checkIcon.addEventListener('click', function(){
        checkIcon.style.color = '#568725';
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash-can";
    trashIcon.style.color = '#9FD2DC';
    trashIcon.style.fontSize = '20px'
    trashIcon.addEventListener('click', function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}