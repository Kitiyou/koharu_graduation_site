function loginBtnClick() {
    document.getElementsByClassName("login-btn")[0].classList.add("finish");
    document.getElementsByClassName("input-div")[0].classList.remove("invisible");
}
var loginFlag = false;
var passwordInput = document.getElementsByClassName("pwd-input")[0];
function loginSubmit() {
    if (!loginFlag && isCorrectPassword(passwordInput.value)) {
        passwordInput.disabled = "disabled"
        window.sessionStorage.setItem("khr_password", passwordInput.value);
        loginFlag = true;

        document.getElementById("rotation-group").classList.add("rotation");
        document.getElementsByClassName("input-div")[0].classList.add("finish");
        document.getElementsByClassName("input-rect")[0].classList.add("finish");
        document.getElementsByClassName("input-rect")[1].classList.add("finish");
        document.getElementsByClassName("success-div")[0].classList.remove("invisible");
        setTimeout(function() { window.location.href = "index.html" }, 2000)
    }
}