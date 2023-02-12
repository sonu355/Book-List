// book class : represent a book
class Book{
    constructor(book, author, isbn){
        this.book = book
        this.author = author
        this.isbn = isbn
    }
}

//class UI : handles UI
class UI{
    static displayBooks() {
        const StoreBooks = [
            {
                title:'Book one',
                author:'John doe',
                isbn:'#2435'
            },
            {
                title:'Book Two',
                author:'Alex Carey',
                isbn:'#8768'
            }
        ];
        const books = StoreBooks
        books.forEach((book) => UI.addBookToList())
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list')

        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        list.appendChild(row);
    }
}

//Event : display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Add A book
document.querySelector('#book-form').addEventListener('submit',(e) => {
    //get form values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value
})