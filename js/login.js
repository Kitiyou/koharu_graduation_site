function loginSubmit() {
    var password = document.getElementById("password").value;
    if (isCorrectPassword(password)) {
        window.sessionStorage.setItem("khr_password", password);
        return true;
    }
    else {
        window.alert("パスワードが正しくありません。")
        return false;
    }
}
