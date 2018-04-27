              
const KEY = `ef5957a1515c98dca956c5fbbc13e967e2756f68db6a9160a683eb291e2894d2`;
const url = `https://api.unsplash.com/photos/?client_id=${KEY}`;
const urlSearch = `https://api.unsplash.com/search/?client_id=${KEY}&query=bali`;

let search = document.getElementById('images-container');

fetch(urlSearch)
.then(items => items.json())
.then(items =>{

    console.log( items.photos.results)

    let content = '<ul>'

    for(i=0; i < 9; i++){
        
        content += `

        <li>
            <img src=${items.photos.results[i].urls.regular}
            srcset= "${items.photos.results[i].urls.thumb} 200w,
            ${items.photos.results[i].urls.small} 400w,
            ${items.photos.results[i].urls.regular} 1080w">
            <div>
            <p class="likes"><img src="images/heart.svg" alt="heart icon represents likes"> ${items.photos.results[i].likes}</p>
            <p class="author"><img src="images/user-icon.svg" alt="user icon small person">${items.photos.results[i].user.username}</p>
            </div>
        </li> `
        
    }
    content += '</ul>'
    search.innerHTML = content;
})

document.getElementById('logo-animation').addEventListener('click',function(){

    let firstNumber = Math.floor((Math.random() * 9) + 1);
    let secondNumber = Math.floor((Math.random() * 9) + 1);
    
    document.querySelector('#logo-animation img').classList.toggle('animate-logo');
    document.querySelector(`#images-container ul li:nth-of-type(${firstNumber}n)`).classList.toggle('animate-logo');
    document.querySelector(`#images-container ul li:nth-of-type(${secondNumber}n)`).classList.toggle('animate-logo');

})
