// function buttonThree(){
//     document.body.style.backgroundColor = "black"
// }


// function buttonClick(){
//     document.body.style.backgroundColor = 'red';
// }

// const clickBtn = document.getElementById('clickButton');
// clickBtn.onclick = buttonClick;


// const makeBtn = document.getElementById('makeBlue');
// makeBtn.onclick = function make(){
//     document.body.style.fontSize = '2rem';
// }

// // addEventListner 

// // option one
// const btnOne = document.getElementById('btn1');
// btnOne.addEventListener('click', btn)

// function btn(){
//     document.body.style.backgroundColor = 'pink';
// }

// // option two 

// document.getElementById('btn2').addEventListener('click', function(){
//     document.body.style.color = 'red';
//     document.body.style.backgroundColor = 'goldenrod'
// })

// // option three

// function btn3(){
//     document.body.style.backgroundColor = 'Purple'
// }

// // ADD ONCLICK TO CHANGE THE TEXT

// function onClick(){
//     const click = document.getElementById('change-text')
//     click.innerHTML = "The page was reload....."
// }

// // another way to change text


// // document.getElementById('submitBtn').addEventListener('click', function(){
// //     const submitText = document.getElementById('sumiteInput');
// //     submitText.innerText = "your cv was submit"
// // });

// document.getElementById('submitBtn').addEventListener('click', makeChanges);
// function makeChanges(){
//     const submitText = document.getElementById('sumiteInput');
//     submitText.innerText = "cv submit"
// }

// // ---------------=================================----------------------------*/

// document.getElementById('inputBtn').addEventListener('click', function(){
//     const inputField = document.getElementById('input-Field');
//     const inputText = inputField.value

//     const p = document.getElementById('chages-Text')
//     p.innerText = inputText;

//     inputField.value = '';

// })


// // =======================================

// document.getElementById('btn').addEventListener('click', function(){
//     const input = document.getElementById('inputField');
//     const inputText = input.value;

//     const pTag = document.getElementById('heading-text');
//     pTag.innerText = inputText;

//     input.value = '';
// })

// ADD A COMMENT IN COMMENT BOX

// 1st: step get the button 

document.getElementById('post-Comment').addEventListener('click', function(){
    // second step to get the comment box area
    const textArea = document.getElementById('textAreaBox');
    
    // thard step output the textarea value
    const textValue = textArea.value;

    // get the main div
    const addComment = document.getElementById('commtent-container');
    
    // create a new element 
    const createElement = document.createElement('p');
    createElement.innerText = textValue;

    addComment.appendChild(createElement);

    textArea.value = '';
})
