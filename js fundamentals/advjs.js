function Book(title, author, perused) {
    this.title = title;
    this.author = author;
    this.perused = perused; //boolean, true or false value

    this.info = () => {
        let read = (perused) ? 'have read' : 'have not read'
        return `${title} by ${author}, ${read}`;
    }
}

const book1 = new Book('The Hobbit', 'J.R. Tolkien', false)
console.log(book1.info())