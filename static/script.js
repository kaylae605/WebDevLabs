
greetingFunc("Kayla"); 

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.endsWith("index.html")) {
        greetingFunc("Kayla");
    }
});





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

// function showList(){
//     const list = document.getElementById("list");
//     const button = document.querySelector("button");

//   if (list && button) {
//     list.style.display = "block"; // Show the list
//     button.style.display = "none"; // Hide the button
//   }
// }





function validate() {
    var userName = document.getElementById("fname");
    var userEmail = document.getElementById("email");
    var userComment = document.getElementById("comment");
    var message = document.getElementById("errMessage");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userComment.checkValidity()){
        message.innerHTML = "please fill out the form correctly so I can get back to you"; 
    }

}


/*help from chatgpt*/

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("adviceText").innerText = data.slip.advice;
    })
    .catch(error => {
      document.getElementById("adviceText").innerText = "Failed to fetch advice. Please try again.";
      console.error("Error fetching advice:", error);
    });
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







