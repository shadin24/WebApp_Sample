function validate() {
    let username = document.getElementById("username").value.trim();  // Trim any leading or trailing whitespace
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    msg.style.color = "red";
    if (username === "") {
        msg.textContent = "Enter username";
        return false;
    } else if (password === "") {
        msg.textContent = "Enter password";
        return false;
    } else if (password.length < 6) {
        msg.textContent = "Password length should be >6";
        return false;
    } else {
        return true;
    }
}
