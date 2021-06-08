const myLibrary = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
      },
      {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
      }
]

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
    const renderBookCards = (title, author, pages, read, index) => {
        let buttonValue = (read) ? "Read" : "Have not read"
        libraryCont.innerHTML += `
            <div class=\"book-card\">
                <p class=\"book-title\">${title}</p>
                <p class=\"book-author\">${author}</p>
                <p class=\"book-pages\">Pages: ${pages}</p>
                <div class=\"book-btns\">
                    <input class=\"read-book\" type=\"button\" value=\"${buttonValue}\">
                    <input id=\"${index}\" class=\"remove-book\" type=\"button\" value=\"Remove Book\">
                </div>
            </div>
            `
    }

    libraryCont.innerHTML = ""

    for (let i = 0; i < myLibrary.length; i++) {
        renderBookCards(myLibrary[i].title, 
            myLibrary[i].author, 
            myLibrary[i].pages, 
            myLibrary[i].read, 
            i)
    }

    const delBook = document.getElementsByClassName("remove-book")
    const readBook = document.getElementsByClassName("read-book")

    for (const btn of delBook) {
        btn.addEventListener("click", (e) => delBookFromLibrary(e))
    }
    for (const btn of readBook) {
        btn.addEventListener("click", (e) => console.log(e))
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

    const book = createBook(event)

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

}

const changeRead = (e) => {

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

