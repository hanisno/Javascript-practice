var addItemBtn = document.getElementById("add-item-button");

function addToList() {
  var text = document.getElementById("input-item").value;
  var li = document.createElement("li");
  li.textContent = text;
  document.getElementById("list").appendChild(li);
  document.getElementById("input-item").value = ""; //clear form after adding item
}

addItemBtn.addEventListener("click", addToList);
