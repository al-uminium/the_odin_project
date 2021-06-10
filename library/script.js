const myLibrary = []

//Query Selectors
const openForm = document.querySelector("#open-form")
const formContainer = document.querySelector(".form-container");
const closeForm = document.querySelector("#close-form")
const addBook = document.querySelector("#add-book")

//Book constructor and methods
function Book(title, author, pages, perused) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.perused = perused; //bool val
}

Book.prototype.changeReadStatus = function(e) {
    return (this.perused) ? (this.perused = false) : (this.perused = true);
}

//Helper functions
const createBook = () => {
    let bookTitle = document.querySelector("#book-title").value;
    let bookAuthor = document.querySelector("#book-author").value;
    let bookPages = document.querySelector("#book-pages").value;
    let perused = document.querySelector("#book-read").checked;
    
    if (!bookTitle || !bookAuthor || !bookPages) {
        return null
    }
    
    return new Book(bookTitle, bookAuthor, bookPages, perused)
}

const renderBooks = () => {
    let libraryCont = document.querySelector("#library-container")
    const renderBookCards = (title, author, pages, perused, index) => {
        let buttonValue = (perused) ? "Have read" : "Have not read"
        libraryCont.innerHTML += `
            <div class=\"book-card\">
                <p class=\"book-title\">${title}</p>
                <p class=\"book-author\">${author}</p>
                <p class=\"book-pages\">Pages: ${pages}</p>
                <div class=\"book-btns\">
                    <input class=\"read-book bk-btn\" type=\"button\" value=\"${buttonValue}\">
                    <input id=\"${index}\" class=\"remove-book bk-btn\" type=\"button\" value=\"Remove Book\">
                </div>
            </div>
            `
    }

    libraryCont.innerHTML = ""

    for (let i = 0; i < myLibrary.length; i++) {
        renderBookCards(myLibrary[i].title, 
            myLibrary[i].author, 
            myLibrary[i].pages, 
            myLibrary[i].perused, 
            i)
    }

    const delBook = document.getElementsByClassName("remove-book")
    const readBook = document.getElementsByClassName("read-book")

    for (const btn of delBook) {
        btn.addEventListener("click", (e) => delBookFromLibrary(e))
    }
    for (const btn of readBook) {
        btn.addEventListener("click", (e) => changeRead(e))
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

    const book = createBook(event) //returns null if input values are empty.
    if (book) {
        if (checkForDuplicate(book.title, book.author)) { //returns true if there is duplicate
            alert("You already have this book in your library")
            return
        }

        myLibrary.push(book)
        renderBooks()
    
        document.querySelector("#book-title").value = ""
        document.querySelector("#book-author").value = ""
        document.querySelector("#book-pages").value = ""
        document.querySelector("#book-read").checked = false;
    }
    hideForm()
}

const changeRead = (e) => {
    //need to identify which book it is in myLibrary
    //afterwards change perused to !perused
    //either change the input value, or re-render everything again
    let bookID = e.target.nextElementSibling.id //remove button has ID containing location of book in myLibrary

    e.target.value = (e.target.value === "Have read") ? ("Have not read") : ("Have read")
    myLibrary[bookID].changeReadStatus()
}

const delBookFromLibrary = (e) => {
    myLibrary.splice(e.target.id,1)
    renderBooks()
}

const showForm = () => {
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

renderBooks()
