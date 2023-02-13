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
function clearField() {
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
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

    const book = new Book(title,author,isbn)
    console.log(book)
    //Add book to UI
    addBookToList(book)

    //clear fields
    clearField()
})
// delete the fields
document.querySelector('#book-list').addEventListener('click',(e) => {
    deleteBooks(e.target)
})