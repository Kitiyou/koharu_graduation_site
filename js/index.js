var modal = document.getElementsByClassName("modal")[0];
var modalImg = document.getElementsByClassName("modal-img")[0];
var modalTitle = document.getElementsByClassName("modal-title")[0];
var eventList = document.getElementsByClassName("event-list");

function closeModal() {
    modal.style.display = "none";
}
function openModal(title, src) {
    return function() {
        modal.style.display = "flex";
        modalTitle.innerHTML = title;
        modalImg.src = src;
    }
}

var modalClose = document.getElementsByClassName("modal-close")[0];
var modalImgBox = document.getElementsByClassName("modal-img-box")[0];
modalClose.onclick = closeModal;
modalImgBox.onclick = closeModal;
var lis = new Array();

for (var i = 0; i < eventList.length; i++) {
    var children = eventList[i].children;
    for (var j = 0; j < children.length; j++) {
        lis.push(children[j])

        var title = children[j].getElementsByClassName("event-title")[0].innerHTML;
        var imgNode = children[j].getElementsByClassName("event-img")[0];
        var src = imgNode.src.replace("/small/", "/images/");
        imgNode.onclick = openModal(title, src);
    }
}

var liIndex = 0;
var checkingFlag = false;
function liEnter(li) {
    li.classList.add("scrolled");
}
function liCheck() {
    if (!checkingFlag && liIndex < lis.length) {
        var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var boundingClientRect = lis[liIndex].getBoundingClientRect();
        if (boundingClientRect.top + boundingClientRect.height / 2 < clientHeight) {
            liEnter(lis[liIndex]);
            liIndex++;
            checkingFlag = true;
            setTimeout(timeout, 150);
        }
    }
}
function timeout() {
    checkingFlag = false;
    liCheck();
}
window.onscroll = liCheck;
window.onresize = liCheck;
window.onload = liCheck;
