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

function close_popup(){
    document.getElementById
}