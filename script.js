function checkPassword() {
    var password = prompt("Please enter the password:");
    
    if (password === "frankbutt") { 
        window.location.href = "Transcript.html"; 
    } else {
        alert("Incorrect password. Please try again.");
    }
}



