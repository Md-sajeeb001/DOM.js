// const licollaction = document.getElementsByTagName('li');
// for(const li of licollaction){
//     console.log(li.innerText);
// }

// const headingTag = document.getElementsByTagName('h1');
// for(const h of headingTag){
//     console.log(h);
// }


const title = document.getElementById('product-titel');
title.innerHTML = 'change by js'
console.log(title);

const productItems = document.getElementsByClassName('style-items')
console.log(productItems);
for(const product of productItems){
    console.log(product.innerText);
}