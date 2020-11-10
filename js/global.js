function passwordHash(password) {
    var len = password.length;
    var x1 = new Array();
    for (var i = 0; i < len; i++) {
        x1[i] = password[i].charCodeAt() * (i + 26);
    }
    var result = 0;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j <= i; j++) {
            result += x1[i] * x1[j] * (i + j + 2);
        }
    }
    return result;
}

function isCorrectPassword(password) {
    return passwordHash(password) === 781779614;
}

function checkPassword() {
    var password = window.sessionStorage.getItem("khr_password");
    if (!password || !isCorrectPassword(password)) {
        window.location.href = "login.html"
    }
}