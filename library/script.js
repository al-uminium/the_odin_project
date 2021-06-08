const myLibrary = []

//Query Selectors
const openForm = document.querySelector("#open-form")
const formContainer = document.querySelector(".form-container");
const closeForm = document.querySelector("#close-form")
const addBook = document.querySelector("#add-book")
const delBook = document.getElementsByClassName("remove-book")
// const readBook = document.querySelector("")

//Book constructor and methods
function Book(title, author, pages, perused) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.perused = perused; //bool val
}

Book.prototype.info = function() {
    let read = (this.perused) ? "have read" : "have not read"
    return `${this.title} by ${this.author}, ${read}`
}


//Helper functions
const createBook = () => {
    let bookTitle = document.querySelector("#book-title").value;
    let bookAuthor = document.querySelector("#book-author").value;
    let bookPages = document.querySelector("#book-pages").value;
    let perused = document.querySelector("#book-read").checked;
    
    return new Book(bookTitle, bookAuthor, bookPages, perused)
}

const renderBooks = (title, author, pages, read) => {
    const renderBookCards = (title, author, pages, read, index) => {
        let libraryCont = document.querySelector("#library-container")
        if (read) {
            libraryCont.innerHTML += `
                <div class=\"book-card\" id=\"${index}\">
                    <p class=\"book-title\">${title}</p>
                    <p class=\"book-author\">${author}</p>
                    <p class=\"book-pages\">Pages: ${pages}</p>
                    <div>
                        <input class=\"read-book\" type=\"button\" value=\"Read\">
                        <input class=\"remove-book\" type=\"button\" value=\"Remove Book\">
                    </div>
                </div>
            `
        } else {
            libraryCont.innerHTML += `
                <div class=\"book-card\" id=\"${index}\">
                    <p class=\"book-title\">${title}</p>
                    <p class=\"book-author\">${author}</p>
                    <p class=\"book-pages\">Pages: ${pages}</p>
                    <div>
                        <input type=\"button\" value=\"To Read\">
                        <input type=\"button\" value=\"Remove Book\">
                    </div>
                </div>
            `
        }
    }
    for (let i = 0; i < myLibrary.length; i++) {
        renderBookCards(title, author, pages, read, i)
    }
}

const checkForDuplicate = (title, author) => {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === title && myLibrary[i].author === author) {
            return true
        }
    }
    return false
}

const addBookToLibrary = (event) => {
    event.preventDefault() //prevents form submission & page reloading
    const book = createBook(event);

    let title = book.title;
    let author = book.author
    let pages = book.pages
    let read = book.perused

    if (checkForDuplicate(title, author)) { //returns true if there is duplicate
        alert("You already have this book in your library")
        return
    }
    myLibrary.push(book)


    renderBooks(title,author,pages,read)

    document.querySelector("#book-title").value = ""
    document.querySelector("#book-author").value = ""
    document.querySelector("#book-pages").value = ""
    document.querySelector("#book-read").checked = false;
}

const delBookFromLibrary = (e) => {
    //this function will fire upon clicking of remove button
    //will take target id, run splice(idnum, 1)
    //once target is removed, run render function
    console.log(e.target.id)
}

const showForm = () => { //creates empty div, set #cover-div id, and append to body
    const newDiv = document.createElement("div");
    newDiv.id = "cover-div";
    document.body.appendChild(newDiv);

    formContainer.style.display = "block";
}

const hideForm = () => {
    const coverDiv = document.querySelector("#cover-div");
    coverDiv.remove();
    
    formContainer.style.display = "";
}



//Event listeners
openForm.addEventListener('click', () => showForm())
closeForm.addEventListener('click', () => hideForm())
addBook.addEventListener('click', (event) => addBookToLibrary(event))

