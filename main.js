// book class : represent a book
class Book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}
function displayBooks() {
    const storeBooks = [
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
        for(let i = 0; i < storeBooks.length; i++){
            const book = storeBooks[i]
            console.log(storeBooks[1])
            const list = document.querySelector('#book-list')
            const row = document.createElement('tr')
            row.innerHTML = `
            <td>${book.title}</td>i
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>`;
            list.appendChild(row);
        }
    }
    function addBookToList() {
        const list = document.querySelector('#book-list')
        consar row = 
    }

//Event : display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Add A book
document.querySelector('#book-form').addEventListener('submit',(e) => {
    e.preventDefault()
    //get form values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    const book = new Book(title,author,isbn)
    console.log(book)
    //Add book to UI
    addBookToList(book)
})