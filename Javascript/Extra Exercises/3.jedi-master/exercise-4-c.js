const places = [
    {
      title: "Random title",
      imgUrl:
        "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Random title",
      imgUrl:
        "https://images.unsplash.com/photo-1570610155223-66279ba81b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Random title",
      imgUrl:
        "https://images.unsplash.com/photo-1570888233388-35d777042d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Random title",
      imgUrl:
        "https://images.unsplash.com/photo-1490440101319-4c8eb3880432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Random title",
      imgUrl:
        "https://images.unsplash.com/photo-1460453429228-912eec8be349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

const elementBody = document.querySelector('body')

places.forEach(place => {

    const newDiv = document.createElement('div')
    const newH4 = document.createElement('h4')
    const newImg = document.createElement('img')

    newH4.textContent = place.title
    newImg.src = place.imgUrl

    // newDiv.appendChild(newH4)
    // newDiv.appendChild(newImg)
    newDiv.append(newH4, newImg)
    
    elementBody.appendChild(newDiv)

});


const elementButton = document.querySelector('button')
const elementDiv = document.querySelector('div')

elementButton.addEventListener('click', (event) => {
        elementBody.lastElementChild.remove()
    
})



const elementsDiv = document.querySelectorAll('div') 

for (const elementDiv of elementsDiv) {
    
    const newButton = document.createElement('button')
    newButton.textContent = 'Delete'

    elementDiv.appendChild(newButton)

    newButton.addEventListener('click', (event) => {
        newButton.parentNode.remove()
    })

}