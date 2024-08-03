
function validation(){

    var rval=true;


    var name=document.getElementById('name').value;
    var uemail=document.getElementById('email').value;
    var unum=document.getElementById('number').value;
    var pwd1=document.getElementById('pass1').value;
    var pwd2=document.getElementById('pass2').value;
   


    if(name.length<3){
        rval=false;
        var com=document.getElementById('ferror1')
        com.innerHTML="* Name must contain atleast 3 character";
        console.log(name);
            }
    else{
        document.getElementById('ferror1').innerHTML='';
    }

    if(uemail.length>40){
        rval=false;
        var com=document.getElementById('ferror2')
        com.innerHTML="* Email length is to long ";
        console.log(uemail);
            }
    else{
        document.getElementById('ferror2').innerHTML='';
    }

    if(unum.length!=10){
        rval=false;
        var com=document.getElementById('ferror3')
        com.innerHTML="*phone number should be of  10 digits";
        console.log(unum);
            }
    else{
        document.getElementById('ferror3').innerHTML='';
    }

    if(pwd1.length<6 || pwd1.length>12){
        rval=false;
        var com=document.getElementById('ferror4')
        com.innerHTML="*Please enter your password with a minimum of 6 and maximum 12 characters";
        console.log(pwd1);
            }
    else{
        document.getElementById('ferror4').innerHTML='';
    }

    if(pwd1!=pwd2){
        rval=false;
        var com=document.getElementById('ferror5')
        com.innerHTML="*password does not match";
        console.log(pwd2);
            }
    else{
        document.getElementById('ferror5').innerHTML='';
    }

    if(!document.getElementById('check').checked){
        rval=false;
       var com=document.getElementById('ferror6')
       com.innerHTML="* please check the terms and conditions"
            }
    else{
        document.getElementById('ferror6').innerHTML='';
    }

    return rval

}