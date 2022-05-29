//buscando botoes para abrir modal
var modalBtns = document.querySelectorAll(".fotosmeio");

modalBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});
var closeBtns = document.querySelectorAll(".closebtn");

closeBtns.forEach(function(btn){
        btn.onclick = function(){
    var modal = btn.closest(".modal").style.display = "none";
        };
});


window.onclick = function(e){
    if(e.target.className === "modal"){
        e.target.style.display = "none";
    }
};
document.querySelectorAll(".carrossel")
.addEventListener("wheel", event => {
    if(event.deltaY > 0){
        event.target.scrollBy(300,0)
    }else{
        event.target.scrollBy(-300,0)
    }
});
