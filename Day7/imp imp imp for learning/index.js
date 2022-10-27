console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.children)

const allElements = Array.from(document.body.children);
console.log(allElements);

const products =[
    {
        id:1,
        name:"ice cream",
        price :20
    }
    ,    {
        id:2,
        name:"chocalte",
        price :30
    },
    {
        id:3,
        name:"banaaa",
        price :40
    }
 
];

// const span = document.getElementById("mySpan");
// const h2 = document.getElementById("myH2");
// h2.insertAdjacentElement("afterend", span);
// const  product_div = document.getElementsByClassName("products");



display();

function hello(data){
    console.log("rayyan shaikh");
    console.log(typeof(data.innerHTML));
    const number = Number.parseInt(data.innerHTML);
    console.log(number);
    const getElement = products.findIndex(products => products.price == number);
    console.log(getElement);
    products.splice(getElement,1);
   
    display();

}

function addProduct(){
    const productName = document.getElementById("pname").value;
    const productPrice = document.getElementById("price").value;
    const product ={
        id:Math.floor(Math.random()*1000),
        name:productName,
        price:parseInt(productPrice)
    }
    console.log(product);
    products.push(product);
    display();
}
function display(){
    let  allProducts=``;
    products.forEach(product =>{
        allProducts+=`<div>
       <h1 >${product.name}</h1>
       <h3 onClick="hello(this)">${product.price}</h1>
       <button style="color:white;background-color:blue">Edit</button>
       </div>`
   });
    const product = document.getElementById("p");
    product.innerHTML=allProducts;
}



 