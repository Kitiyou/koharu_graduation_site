//modal展示图片

var modal = document.getElementsByClassName("modal")[0];
var modalImg = document.getElementsByClassName("modal-img")[0];
var modalTitle = document.getElementsByClassName("modal-title")[0];
var eventLists = document.getElementsByClassName("event-list");
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
for (var i = 0; i < eventLists.length; i++) {
    var children = eventLists[i].children;
    for (var j = 0; j < children.length; j++) {
        var title = children[j].getElementsByClassName("event-title")[0].innerHTML;
        var imgNode = children[j].getElementsByClassName("event-img")[0];
        var src = imgNode.src.replace("/small/", "/images/");
        imgNode.onclick = openModal(title, src);
    }
}
var modalClose = document.getElementsByClassName("modal-close")[0];
var modalImgBox = document.getElementsByClassName("modal-img-box")[0];
modalClose.onclick = closeModal;
modalImgBox.onclick = closeModal;

//滚动显示内容

var showContents = new Array();
var notice = document.getElementsByClassName("notice")[0];
var eventYears = document.getElementsByClassName("event-year");
showContents.push(notice);
for (var i = 0; i < eventLists.length; i++) {
    showContents.push(eventYears[i])
    var children = eventLists[i].children;
    for (var j = 0; j < children.length; j++) {
        showContents.push(children[j]);
    }
}


var contentIndex = 0; //目前显示了多少个内容
var waitingFlag = true;
function liEnter(showContent) {
    // showContent.classList.add("scrolled");
    showContent.className+=" scrolled";
}
function liCheck() { //检查滚动位置并显示
    if (!waitingFlag && contentIndex < showContents.length) {
        var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var boundingClientRect = showContents[contentIndex].getBoundingClientRect();
        if (boundingClientRect.top + boundingClientRect.height / 2 < clientHeight) { //已滚动到
            liEnter(showContents[contentIndex]);
            contentIndex++;
            waitingFlag = true;
            setTimeout(timeout, 200);
        }
    }
}
function timeout() { //等待过后再次检查
    waitingFlag = false;
    liCheck();
}
setTimeout(timeout, 1500); //进入后先等待1.5秒
window.onscroll = liCheck;
window.onresize = liCheck;
window.onload = liCheck;
