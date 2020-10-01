function btnDown(event) {
    console.log(event.code);
    let allKeys = document.querySelectorAll('[data]');
    for (let i = 0; i < allKeys.length; i++) {
        if (allKeys[i].attributes.data.value == event.code && allKeys[i].attributes.data.value != 'CapsLock') {
            allKeys[i].classList.add("press");
        };
    };
    if (event.code == 'CapsLock') {
        document.querySelector('[data="CapsLock"]').classList.toggle("press");
    };
    if (event.code == 'Tab') {
        return false;
    };
    return;
};

function btnUp(event) {
    let allKeys = document.querySelectorAll('[data]');
    for (let i = 0; i < allKeys.length; i++) {
        if (allKeys[i].attributes.data.value == event.code && allKeys[i].attributes.data.value != 'CapsLock') {
            allKeys[i].classList.remove("press");
        };
    };
    return;
};

document.querySelector('.i-1').onkeydown = btnDown;
document.querySelector('.i-1').onkeyup = btnUp;