let userForm = document.getElementById("userForm");
let fname = document.getElementById("fname");
let age = document.getElementById("age");

let greetingText = document.getElementById("greetingText");
let ageMonth = document.getElementById("ageMonth");
let adultContent = document.getElementById("adultContent");
let motivation = document.getElementById("motivation");

function calculateAge(age) {
    return age * 12;
}

userForm.addEventListener("submit", function() {
   event.preventDefault();
  
    let userName = fname.value;
    let userAge = ageMonth.value;

    
    localStorage.setItem("savedName", userName);
    localStorage.setItem("savedAge", userAge);


    greetingText.textContent = `Hello ${userName}`;
    
     let months = calculateAge(userAge);
     ageMonth.textContent = `You are ${months} old`;
     if(userAge >= 18) {
        adultContent.textContent = `You can access adult content`;
     }
     else {
        adultContent.textContent = `You are too young for adult content`;
     }
     motivation.innerHTML = "";
     for(let i = 0; i < 5; i++) {
        motivation.innerHTML += "Keep trying!"
     }
});