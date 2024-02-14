function openPage(pageName,elmnt,color) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].style.backgroundColor = "";
}
document.getElementById(pageName).style.display = "block";
elmnt.style.backgroundColor = color;
}
window.onload = function() {
var x = document.getElementById("drop");
x.style.display = "none";
}
document.getElementById("defaultOpen").click();

function dropwindow() {
var x = document.getElementById("prism");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}