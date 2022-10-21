const obj={
    faizan:98,
    rayyan:90,
    abdulrehman:50,
    tabish:96,
    yasa:80
}

// this is one way of iterate objects
for(x in obj){
    console.log(obj[x]);
}

//2. way of iterate objects
for(let i=0;Object.keys(obj).length;i++){
    console.log(obj[Object.keys(obj)[i]]);
}
// obj.forEach(element => {
//     console.log(element);
// });