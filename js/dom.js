// const licollaction = document.getElementsByTagName('li');
// for(const li of licollaction){
//     console.log(li.innerText);
// }

// const headingTag = document.getElementsByTagName('h1');
// for(const h of headingTag){
//     console.log(h);
// }


// const title = document.getElementById('product-titel');
// title.innerHTML = 'change by js'
// console.log(title);

// const productItems = document.getElementsByClassName('style-items')
// console.log(productItems);
// for(const product of productItems){
//     console.log(product.innerText);
// }

// const id = document.getElementsByTagName('#collaction')
// console.log(id)

// const fing = document.querySelectorAll('#collaction li');
// console.log(fing)

// const find2 = document.querySelector('#collaction li')
// console.log(find2.innerText)


// const dom = document.getElementById('topic dom').innerHTML = "selet all";
// console.log(dom);

// const documents = document.getElementById('collaction').style.backgroundColor = 'yellow'

// const headingTag = document.getElementById('topic dom').style.textAlign = 'center'




// console.log(headingTag)
// console.log(documents.innerText)


// const section = document.querySelectorAll('section');

// for(const find of section){
//     find.style.backgroundColor = 'gray';
//     find.style.padding = '10px';
//     find.style.marginBottom = '10px';
//     find.style.borderRadius = '15px'

// }

// const addStyle = document.getElementById('header1');
// const secondStyle = document.getElementById('header2');
// const pTag = document.getElementById('para');
// pTag.classList.remove('paraTag')
// secondStyle.classList.add('fonst-style')
// addStyle.classList.add('large-text')


// const addStyle = document.getElementById('fav-places');
// console.log(addStyle.innerText)
// addStyle.classList.add('style-items')
// addStyle.classList.remove('style-items')

// const create = document.createElement('h3');
// create.innerHTML = "i love bangladesh and india";
// addStyle.appendChild(create);
// console.log(create.innerText)


const main = document.getElementById('main-section');
console.log(main)

const headingAdd = document.createElement('h1');
headingAdd.innerHTML = "My Favourit Food"
main.appendChild(headingAdd);

const ulAdd = document.createElement('li');
ulAdd.innerText = "cheeeze barger";
main.appendChild(ulAdd);

const ulAdd2 = document.createElement('li');
ulAdd2.innerText = "Dom Briyani";
main.appendChild(ulAdd2);

const ulAdd3 = document.createElement('li');
ulAdd3.innerText = "salad";
main.appendChild(ulAdd3);

const ulAdd4 = document.createElement('li');
ulAdd4.innerText = "borhani";
main.appendChild(ulAdd4);


const sectionItems = document.createElement("section");


sectionItems.innerHTML = `

<h1>fav item</h1>
<li>phone</li>
<li>watch</li>
<li>tv</li>
<li>laptop</li>

`
main.appendChild(sectionItems)