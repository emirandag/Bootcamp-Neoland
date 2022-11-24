const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

const elementBody = document.querySelector('body')

const newUl = document.createElement('ul')

for (const album of albums) {

    const newLi = document.createElement('li')
    newLi.textContent = album
    newUl.appendChild(newLi)

}

elementBody.appendChild(newUl)