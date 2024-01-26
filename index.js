function changePageTitle() {
  document.getElementById("title").innerHTML = "Home Page";
  document.getElementById("title").innerHTML = Date(0);
}

function changeColor(color) {
  const button = document.querySelector("button");
  if (color) {
    button.style.backgroundColor = color;
  } else {
    if (button.style.backgroundColor === "red") {
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red";
    }
  }
}

const title = document.getElementById("title");

title.addEventListener("load", changePageTitle());

// document.addEventListener("keydown", (event) => {
//   console.log(event);
// });

// document.addEventListener("click", (e) => {
//   console.log(e.target);
// });

const input = document.querySelector("input");
// input.addEventListener("input", (e) => console.log(e.target.value));

const form = document.querySelector("form");
const ul = document.querySelector("ul");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputValue = input.value;
//   if (inputValue) {
//     createListItem(inputValue);
//     input.value = "";
//     const listItems = Array.from(document.querySelectorAll("li"));
//     listItems.sort((a, b) => {
//       const firstNumber = parseInt(a.querySelector("input").getAttribute("id"));
//       const secondNumber = parseInt(
//         b.querySelector("input").getAttribute("id")
//       );
//       return secondNumber - firstNumber;
//     });
//     listItems.forEach((item) => {
//       ul.append(item);
//     });
//     console.log(listItems);
//   } else {
//     alert("Input Value is Empty");
//   }
// });

// var id = 1;

// function createListItem(text) {
//   const newItem = document.createElement("li");
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   //   checkbox.setAttribute('id', Date.now());
//   checkbox.setAttribute("id", id.toString());
//   const label = document.createElement("label");
//   label.setAttribute("for", id.toString());
//   id = id + 1;
//   label.innerText = text;

//   newItem.append(checkbox);
//   newItem.append(label);
//   ul.append(newItem);
//   const deleteBtn = document.createElement("button");
//   deleteBtn.innerText = "წაშლა";
//   newItem.append(deleteBtn);
//   deleteBtn.addEventListener("click", (e) => {
//     e.target.parentNode.remove();
//   });
// }

var id = 1;

const pushTest = [];

const staticDltBtn = document.querySelector("#item1");
const staticDeleteBtn = staticDltBtn.parentNode.querySelector("button");
staticDeleteBtn.addEventListener("click", (e) => {
  e.target.parentNode.remove();
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
  pushTest.push(id);
  console.log(pushTest);
  const inputValue = input.value;
  if (inputValue) {
    const newList = createListItem(inputValue);
    console.log(newList);
    input.value = "";
    const listItems = Array.from(document.querySelectorAll("li"));
    listItems.push(newList);
    staticDltBtn?.setAttribute("id", "0");

    if (listItems.length > 1) {
      listItems.sort((a, b) => {
        const firstNumber = parseInt(
          a.querySelector("input")?.getAttribute("id")
        );
        const secondNumber = parseInt(
          b.querySelector("input")?.getAttribute("id")
        );
        return secondNumber - firstNumber;
      });
      listItems.forEach((item) => {
        ul.append(item);
      });
    }
    console.log(listItems);
  } else {
    alert("Input Value is Empty");
  }
});

function createListItem(text) {
  const newItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", id.toString());
  const label = document.createElement("label");
  label.setAttribute("for", id.toString());
  id = id + 1;
  label.innerText = text;

  newItem.append(checkbox);
  newItem.append(label);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "წაშლა";
  newItem.append(deleteBtn);
  deleteBtn.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
  return newItem;
}
