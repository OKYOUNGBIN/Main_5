let chatShow = true;
function show_hide() {
    if (chatShow) {
        $('.chat_main').show();
    } else {
        $('.chat_main').hide();
    }
    chatShow = !chatShow;
}

// ppt menu
let camShow = true;
function show_hide_cam() {
    if (camShow) {
        $('.ppt').show();
    } else {
        $('.ppt').hide();
    }
    camShow = !camShow;
}

let howtouse = true;
function togglePopup(){
    if (howtouse) {
        $('.howtouse').show();
    } else {
        $('.howtouse').hide();
    }
    howtouse = !howtouse;
}

const fullSc = document.getElementsByName("mainScreen");
function openFullscreen() {
    if (fullSc.requestFullscreen) {
        fullSc.requestFullscreen();
    } else if (fullSc.msRequestFullscreen) {
        fullSc.msRequestFullscreen();
    } else if (fullSc.webkitRequestFullscreen) {
        fullSc.webkitRequestFullscreen
    }
}