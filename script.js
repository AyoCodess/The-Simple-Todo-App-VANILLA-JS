let addTodoButton = document.querySelector(".addTodo");
let todoContainer = document.querySelector(".todoContainer");
let inputField = document.querySelector(".inputField");

addTodoButton.addEventListener("click", function () {
  /// validation
  if (inputField.value.length > 0) {
    /// create new item
    let newListItem = document.createElement("p");

    /// adding class to new item so we can style it
    newListItem.classList.add("item");

    /// adding input field text to new item
    newListItem.innerText = inputField.value;

    /// appending the new item to container
    todoContainer.appendChild(newListItem);

    /// create delete button
    let deleteButton = document.createElement("button");

    /// adding text to delete button

    deleteButton.innerText = "Delete";

    /// adding a class to delete button so we can style it
    deleteButton.classList.add("deleteButton");

    /// append button to new list element

    newListItem.append(deleteButton);

    /// clearing the input field
    inputField.value = "";

    /// strike through
    // newListItem.addEventListener("click", function () {
    //   dele.style.textDecoration = "line-through";
    // });

    /// deleting an item
    deleteButton.addEventListener("click", function () {
      todoContainer.removeChild(newListItem);
    });

    /// item turns red when clicked

    newListItem.addEventListener("click", function () {
      newListItem.style.color = "red";
    });

    /// double clicked it turns back to black

    newListItem.addEventListener("dblclick", function () {
      newListItem.style.color = "black";
    });
  }
});
