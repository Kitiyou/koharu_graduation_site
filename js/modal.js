var modal = document.getElementsByClassName("modal")[0];
var modalImg = document.getElementsByClassName("modal-img")[0];
var modalTitle = document.getElementsByClassName("modal-title")[0];
var modalClose = document.getElementsByClassName("modal-close")[0];
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

modalClose.onclick = closeModal;

for (var i = 0; i < eventList.length; i++) {
    var children = eventList[i].children;
    for (var j = 0; j < children.length; j++) {
        var title = children[j].getElementsByClassName("event-title")[0].innerHTML;
        var imgNode = children[j].getElementsByClassName("event-img")[0];
        var src = imgNode.src.replace("/small/", "/images/");
        imgNode.onclick = openModal(title, src)
    }
}