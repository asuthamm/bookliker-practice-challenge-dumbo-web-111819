// document.addEventListener("DOMContentLoaded", function() {});

const booksUrl = 'http://localhost:3000/books'
const bookUl   = document.querySelector('ul#list')
const panelDiv = document.querySelector("div#show-panel")





fetch(booksUrl)
  .then(r => r.json())
  .then(booksArr => booksArr.forEach(slapOnDom))


function slapOnDom(book) {
    // console.log(book)
    const newLi = document.createElement('li')
    newLi.innerText = book.title
    bookUl.append(newLi)

    newLi.addEventListener('click', e => {
        console.log("click")
        bookDetails(book)
    })
}

function bookDetails(book) {
    panelDiv.innerHTML = ""
    const bookDiv = document.createElement('div')
    bookDiv.classNae = 'book_details'
        const h2 = document.createElement('h2')
        h2.innerText = book.title
        const h4 = document.createElement('h4')
        h4.innerText = book.description
        const img = document.createElement('img')
        img.src = book.img_url
        img.alt = 'some book'

        const userUL  = document.createElement('ul')
        userUL.innerHTML = ""
        book.users.forEach(user => {    
            const user_li = document.createElement('li')
            user_li.innerText = user.username 
            // console.log(user_li)
            userUL.append(user_li)
        })
    // likeList(book)

    panelDiv.append(h2, h4, img, userUL)
    // panelDiv.append(bookDiv)

    img.addEventListener('click', e => {
        // console.log(book)
        backendUpdate(book, userUL)
    })
}

function backendUpdate(book, userUL) {
    const thisBookUrl = `${booksUrl}/${book.id}`
    // console.log(thisBookUrl)
    book.user.append(myId)
    console.log(book.user)
    fetch(hisBookUrl, {
      method:'PATCH',
     headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
     },
     body: JSON.stringify({
    users: book.users.push(myId)
      })
    })
    .then(resp => resp.json())
    .then(json_resp => console.log(json_resp))
}

function myId() {
    return {"id":1, "username":"pouros"}
}

function likeList(book) {
    // const userUL  = document.createElement('ul')
    // userUL.innerHTML = ""
    // book.users.forEach(user => {    
    // const user_li = document.createElement('li')
    //     user_li.innerText = user.username 
    //     // console.log(user_li)
    //     userUL.append(user_li)
    // })


}