const addButton = document.querySelector(".add-btn");
const modal = document.querySelector(".add-modal");
const form = document.querySelector(".form-container");
const modalBtn = document.querySelector(".modal-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

const container = document.querySelector(".content");
const bookBox = document.querySelector(".book-box");
const boxContent = document.querySelector(".box-content");

const deleteBtn = document.querySelector(".close-btn");

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
    removeBtn.classList.add("close-btn");

    content.appendChild(removeBtn);
    container.appendChild(content);
    content.appendChild(titleName);

    titleName.innerHTML = `<h1>${title.value}</h1>`;
  });
  deleteBtn.addEventListener("click", (e) => {
    console.log("fluu", e);
  });
}

addToLibrary();
