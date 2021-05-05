(function(){
    "use strict";
    window.onload = function() {
        document.getElementById("stop_btn").disabled = true;
        document.getElementById("start_btn").onclick = startAnimation;
        document.getElementById("stop_btn").onclick = stopAnimation;
        document.getElementById("size_select").onchange = changeSize;
        document.getElementById("box_label").onclick = changeTurbo;


    }

    var counter = 0;
    var timerInterval;
    var delayMs = 250;
    var frames;
    var frameArr;

    function startAnimation(){
        var animation = document.getElementById("animation_select");
        var ani_option = animation.options[animation.selectedIndex].value;
        frames = ANIMATIONS[ani_option];
        frameArr = frames.split("=====\n");
        changeTurbo();

        changeSize();
        document.getElementById("start_btn").disabled = true;
        document.getElementById("stop_btn").disabled = false;
    }

    function stopAnimation(){
        window.clearInterval(timerInterval);
        document.getElementById("display_area").value = frames;
        document.getElementById("start_btn").disabled = false;
        document.getElementById("stop_btn").disabled = true;
    }

    function changeSize(){
        var size = document.getElementById("size_select");
        var size_option = size.options[size.selectedIndex].value;
        document.getElementById("display_area").style.fontSize = size_option;
    }

    function changeTurbo(){
        clearInterval(timerInterval);
        var isTurbo = document.getElementById("box_label").checked;
        if(isTurbo){
            delayMs = 50;

        } else {
            delayMs = 250;
        }
        timerInterval = setInterval(animation_callback, delayMs);
    }

    function animation_callback(){
        if(counter >= frameArr.length){
            counter = 0;
        }else {
            document.getElementById("display_area").value =  frameArr[counter];
            counter++;
        }
    }
}())