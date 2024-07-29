let gamenum = 12;

function guessNumber() {
    let usernum = document.getElementById("usernum").value;
    let message = document.getElementById("message");
    
    if (usernum == gamenum) {
        alert("Congratulations, you entered the right number!");
        message.textContent = "Congratulations, you entered the right number!";
    } else {
        message.textContent = "You entered the wrong number. Guess again:";
    }
    document.getElementById("usernum").value = '';
}


document.getElementById("usernum").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        guessNumber();
    }
});