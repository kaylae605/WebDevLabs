var x = 5;
var y = 7;
var z = x + y; 
console.log(z); 
var A = "Hello"; 
var B = "world!"; 
var C = A + B; 
console.log(C); 

SumNPrint(x,y);
SumNPrint(A,B); 

if (C.length > z){
    console.log(C); 
}else if (C.length < z) {
    console.log(z); 
}else {
    console.log("good job!"); 
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"]; 

findTheBanana(L1,L2); 

greetingFunc("Kayla"); 


function SumNPrint(x1, x2){
    let x3 = x1+x2; 
    console.log(x3); 
}

// function findTheBanana(arr){
//     for(i = 0; i < arr.length; i++){
//         if(arr[i].localeCompare("Banana") == 0){
//             console.log("found the banana in " + i);
//             return 1;
//         }
//     }
// }

function findTheBanana(arr1,arr2){
    if (arr1.forEach(isBanana) == 1){
        console.log("We found a banana in the first array")
    } else if (arr2.forEach(isBanana) == 1){
        console.log("We found a banana in the second array")
    }
}

function isBanana(str){
    if (str.localeCompare("Banana") == 0){
        return 1
    }
}



function greetingFunc(name){
    d = new Date();
    h = d.getHours(); 
    if (h < 12){
        const E = document.getElementById("greeting");
        E.innerHTML = "Good morning, I am " + name;
    } else if (h > 12 && h < 18){
        const E = document.getElementById("greeting");
        E.innerHTML = "Good afternoon, I am " + name;
    } else if (h > 18 && h < 20){
        const E = document.getElementById("greeting");
        E.innerHTML = "Good evening, I am " + name;
    } else if (h > 20 && h < 24 && h > 0 && h < 5){
        const E = document.getElementById("greeting");
        E.innerHTML = "Good night, I am " + name;
    }
}

