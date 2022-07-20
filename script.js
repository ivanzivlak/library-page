const addButton = document.querySelector(".add-btn");
const modal = document.querySelector(".add-modal");
const form = document.querySelector(".form-container");
const modalBtn = document.querySelector(".modal-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

const container = document.querySelector(".content");
const bookBox = document.querySelectorAll("book-box");
const boxContent = document.querySelector(".box-content");

const deleteBtn = document.querySelectorAll(".book-btn");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addToLibrary() {
  addButton.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    console.log(myLibrary);
  });

  modalBtn.addEventListener("click", () => {
    let newBook = new Book(title.value, author.value, pages.value);
    myLibrary.push(newBook);
    const content = document.createElement("div");
    const titleName = document.createElement("div");
    const removeBtn = document.createElement("button");

    titleName.classList.add("box-content");
    content.classList.add("book-box");
    removeBtn.classList.add("book-btn");

    content.appendChild(removeBtn);
    container.appendChild(content);
    content.appendChild(titleName);

    titleName.innerHTML = `<h1>${title.value}</h1> <h1>${author.value}</h1> <h1>${pages.value}</h1>`;
    removeBtn.textContent = "X";
  });

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("book-btn")) {
      console.log("hello");
      console.log(e.path[0].parentElement.remove());
    }
  });
}

addToLibrary();
console.log(deleteBtn);

console.log(Array.from(deleteBtn));
