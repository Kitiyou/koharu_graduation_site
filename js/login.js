if (!("classList" in document.documentElement)) {
    Object.defineProperty(HTMLElement.prototype, "classList", {
        get: function() {
            var self = this;
            function update(fn) {
                return function(value) {
                    var classes = self.className.split(/\s+/g),
                        index = classes.indexOf(value);

                    fn(classes, index, value);
                    self.className = classes.join(" ");
                }
            }
            return {
                add: update(function(classes, index, value) {
                    if (!~index) classes.push(value);
                }),
                remove: update(function(classes, index) {
                    if (~index) classes.splice(index, 1);
                })
            };
        }
    });
}

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
        setTimeout(function() { window.location.href = "index.html"; }, 6000);
    }
}