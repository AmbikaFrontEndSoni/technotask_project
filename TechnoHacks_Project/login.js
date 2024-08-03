
function validation() {

    var rval = true;

    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pass').value;

    if (email.length > 40) {
        rval = false;
        var com = document.getElementById('ferror1')
        com.innerHTML = "* Email length is to long ";
        console.log(email);
    }
    else {
        document.getElementById('ferror1').innerHTML = '';
    }

    if (pwd.length < 6 || pwd.length > 12) {
        rval = false;
        var com = document.getElementById('ferror2')
        com.innerHTML = "*Please enter your password with a minimum of 6 and maximum 12 characters";
        console.log(pwd);
    }
    else {
        document.getElementById('ferror2').innerHTML='';
    }

    if (!document.getElementById('checkbox').checked) {
        rval = false;
        var com = document.getElementById('ferror3')
        com.innerHTML = "* please check the terms and conditions"
    }
    else {
        document.getElementById('ferror3').innerHTML='';
    }

    return rval

}