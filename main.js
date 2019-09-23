document.addEventListener("DOMContentLoaded", function() {
        var elem = document.getElementById("wave");
        var height = 1;
        var id = setInterval(frame, 100);
        var text = document.getElementById("text");
        function frame() {
            if (height >= 100) {
                clearInterval(id);
            } else {
                height++;
                elem.style.height = height + '%';
                text.innerHTML = height * 1  + '%';
            }
        }
});
$(document).ready( function() {
    setTimeout(function(){
        $("#svg").css("display", "block");
    },10900);
});


