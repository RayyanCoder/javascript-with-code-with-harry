

let name = "rayyan@11";
let arrayCount = [];
let count=0;
console.log("yours string is :-",name);
for(let i=33;i<=126;i++){
    let char = (String.fromCharCode(i));
    count=0;
    for(j=0;j<name.length;j++){
        if(char == name[j]){
           count++;
        }
    }
    arrayCount.push(count);
}

// console.log(arrayCount);
count =0;
for(let i=33;i<=126;i++){
    let char = (String.fromCharCode(i));
 
   if(arrayCount[count]>0){
    console.log(`${char}=${arrayCount[count]}`);
   }
   count++;
}





