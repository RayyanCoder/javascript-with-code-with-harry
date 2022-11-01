//document.getElemenByClassName("prodcuts")[0];
//document.getElementById("")
//documetn.querySelectorALl(".items") // in this you can use diffrent items like id and classes 

const id1  = document.getElementById("id1");
console.log(id1.matches('.box'));
const sp1 = document.getElementById(".span1");

// check if the element is present or not 

console.log(id1.contains(sp1));

const firstElment = document.getElementById("nav-ul").firstElementChild.style.color='red';
console.log(firstElment);

//change the color of first element and last element of information div in index.html
firstElement = document.getElementById("information").firstElementChild.style.color='green';
lastElement = document.getElementById("information").lastElementChild.style.color='green';


//see also matches and cloest element 

const navElement = document.getElementById("nav-ul").children.style.color='orange';

//study matches,colest,contains very imp imp

