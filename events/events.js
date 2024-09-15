function buttonThree(){
    document.body.style.backgroundColor = "black"
}


function buttonClick(){
    document.body.style.backgroundColor = 'red';
}

const clickBtn = document.getElementById('clickButton');
clickBtn.onclick = buttonClick;


const makeBtn = document.getElementById('makeBlue');
makeBtn.onclick = function make(){
    document.body.style.fontSize = '2rem';
}

// addEventListner 

// option one
const btnOne = document.getElementById('btn1');
btnOne.addEventListener('click', btn)

function btn(){
    document.body.style.backgroundColor = 'pink';
}

// option two 

document.getElementById('btn2').addEventListener('click', function(){
    document.body.style.color = 'red';
    document.body.style.backgroundColor = 'goldenrod'
})

// option three

function btn3(){
    document.body.style.backgroundColor = 'Purple'
}