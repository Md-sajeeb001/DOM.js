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
