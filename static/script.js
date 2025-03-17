// var x = 5;
// var y = 7;
// var z = x + y; 
// console.log(z); 
// var A = "Hello"; 
// var B = "world!"; 
// var C = A + B; 
// console.log(C); 

// SumNPrint(x,y);
// SumNPrint(A,B); 

// if (C.length > z){
//     console.log(C); 
// }else if (C.length < z) {
//     console.log(z); 
// }else {
//     console.log("good job!"); 
// }

// let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// let L2 = ["Apple", "Banana", "Kiwi", "Orange"]; 

// findTheBanana(L1,L2); 
greetingFunc("Kayla"); 

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.endsWith("index.html")) {
        greetingFunc("Kayla");
    }
});


// function SumNPrint(x1, x2){
//     let x3 = x1+x2; 
//     console.log(x3); 
// }

// function findTheBanana(arr){
//     for(i = 0; i < arr.length; i++){
//         if(arr[i].localeCompare("Banana") == 0){
//             console.log("found the banana in " + i);
//             return 1;
//         }
//     }
// }

// function findTheBanana(arr1,arr2){
//     if (arr1.forEach(isBanana) == 1){
//         console.log("We found a banana in the first array")
//     } else if (arr2.forEach(isBanana) == 1){
//         console.log("We found a banana in the second array")
//     }
// }

// function isBanana(str){
//     if (str.localeCompare("Banana") == 0){
//         return 1
//     }
// }



function greetingFunc(name){
    const d = new Date();
    const h = d.getHours(); 
    const E = document.getElementById("greeting");
    if (E){
        if (h < 12){
            const E = document.getElementById("greeting");
            E.innerHTML = "Good morning, I am " + name;
        } else if (h < 18){
            const E = document.getElementById("greeting");
            E.innerHTML = "Good afternoon, I am " + name;
        } else if (h < 20){
            const E = document.getElementById("greeting");
            E.innerHTML = "Good evening, I am " + name;
        } else {
            const E = document.getElementById("greeting");
            E.innerHTML = "Good night, I am " + name;
        } 
    }
}

function addYear(){
    const currYear = new Date().getFullYear();
    const copyYear = document.getElementById("copyYear");
    if (copyYear) {
        copyYear.textContent += " " + currYear;
    } 

}

function showList(){
    const list = document.getElementById("list");
    const button = document.querySelector("button");

  if (list && button) {
    list.style.display = "block"; // Show the list
    button.style.display = "none"; // Hide the button
  }
}





function validate() {
    var userName = document.getElementById("fname");
    var userEmail = document.getElementById("email");
    var userComment = document.getElementById("comment");
    var message = document.getElementById("errMessage");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userComment.checkValidity()){
        message.innerHTML = "please fill out the form correctly so I can get back to you"; 
    }

}



/*I asked gemini for help writing the bottom two functions because I'm not entirely too
familiar with JavaScript API

I asked to help format it based on the specs given and explain so I could understand the implementation.
If needed I can explain how it works so you know I'm not just mindlessly copy pasting. 
*/


$(document).ready(function() {
    $('#readMore').click(function() {
        $('#intro').hide();
        $('#fullIntro').show();
    });

    $('#readLess').click(function() {
        $('#fullIntro').hide();
        $('#intro').show();
    });
});







