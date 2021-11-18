document.getElementById("cadre_projet_1").checked;
if (document.getElementById("cadre_projet_1").checked === true) {
 alert("Salut moi c'est laura");
}





var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}