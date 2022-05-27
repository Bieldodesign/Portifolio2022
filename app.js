//buscando botoes para abrir modal
var modalBtns = document.querySelectorAll(".fotosmeio");

modalBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});