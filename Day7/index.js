const b = document.body;
console.log(b.firstChild);
console.log(b.firstElementChild);

function changeNavColor(){
    document.body.firstElementChild.style.backgroundColor = 'yellow';
}

changeNavColor();
