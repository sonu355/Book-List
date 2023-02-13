// book class : represent a book
class Book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

function displayBooks() {
    const storeBooks = getBooks()    
    console.log(storeBooks)
    for(let i = 0; i < storeBooks.length; i++){
        const book = storeBooks[i]
        console.log(storeBooks[i])
        addBookToList(book)
    } 

}

function addBookToList(book) {
    const list = document.querySelector('#book-list')
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a herf="#" class="btn btn-danger btn-sm delete">Remove</a></td>
    `
    list.appendChild(row)
}
  
function deleteBooks(el){
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove()
    }
}

function showAlert(message, className){
    const div = document.createElement('div')
    div.className = `alert alert-${className}`
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')
    container.insertBefore(div,form)
    //vanish in 3 sec
    setTimeout(() => document.querySelector('.alert').remove(),3000)
}

function clearField() {
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
}

function getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
        console.log(books,'boosks')
        books = []

    }else {
        books = localStorage.getItem('books')
        console.log(books)
    }
    return books;
}

function addBook(book) {
    const books = getBooks();
    books.push(book)
    localStorage.setItem('books',JSON.stringify('books'))
}

function removeBook(isbn) {
    const books = getBooks()
    books.forEach((book, index) => {
        if(book.isbn === isbn){
            book.splice(index,1)
        }
    })
    localStorage.setItem('books', JSON.stringify(books))
}

//Event : display books
document.addEventListener('DOMContentLoaded',displayBooks())

//Add A book
document.querySelector('#book-form').addEventListener('submit',(e) => {
    e.preventDefault()
    //get form values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    //validation
    if(title === '' || author ==='' || isbn ===''){
        showAlert('please fill the details','danger')
    }else{
        const book = new Book(title,author,isbn)
        console.log(book)
    //Add book to UI
    addBookToList(book)

    //add book to store
    addBook()

    //shiw success message
    showAlert('book added successfully','success')

    //clear fields
    clearField()
    }
    
})
// delete the fields
document.querySelector('#book-list').addEventListener('click',(e) => {
    deleteBooks(e.target)

    showAlert('book removed','info')

})