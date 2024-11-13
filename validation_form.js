function validateForm(){
    let usernameCtrl = document.UserFrm.username;
    let phoneCtrl = document.UserFrm.phone;
    let error = 0;
    if (usernameCtrl.value.trim() == '') {
        usernameCtrl.focus();
        usernameCtrl.style.border = '1px solid red';
        document.getElementById('err_username').innerText = 'Enter username';
        error++;
    }

    if (phoneCtrl.value.trim() == '') {
        phoneCtrl.focus();
        phoneCtrl.style.border = '1px solid red';
        document.getElementById('err_phone').innerText = 'Enter phone';
        error++;
    }
    if (error > 0) {
        return false;
    }
}

// let username = document.getElementById('username');
// username.addEventListener('blur',function(){
//    if (this.value != '') {
//     this.style.border = '1px solid black';
//    }
// });
