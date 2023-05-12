


let courses=document.getElementById('la');
let error5=document.getElementById('error5');

let gender=document.getElementById('las');
let error6=document.getElementById('error6');



let fnameid=document.getElementById('firstName');
let lnameid=document.getElementById('lastName');
let uemailid=document.getElementById('emailid');
let unameid=document.getElementById('uname');
let upassId=document.getElementById('upass');
let confirmPasswordid=document.getElementById("confirmpass");

function validate1()
{
    let fnameid=document.getElementById('firstName');
    let error1=document.getElementById('error1');
    error1.textContent="";
    let fname=fnameid.value;
    let fnamePattern=new RegExp("^[A-Za-z]*$");
    fnameid.style.border="2px red solid";
    if(fname=='')
    {
        error1.textContent="Please Enter First Name";
        return false;
    }
    else if(fname.length<2)
    {
        error1.textContent="Name Must Contain atleast 2 Characters";
        return false;
    }
    else if(fnamePattern.test(fname)==false)
    {
        error1.textContent="Alphabets only";
        return false;
    }
    else
    {
        fnameid.style.border="2px solid green";
        return true;
    }
}


function validate2()
{
    let lnameid=document.getElementById('lastName');
    let error2=document.getElementById('error2');
    error2.textContent="";
    let lanme=lnameid.value;
    let lanmePattern=new RegExp("^[A-Za-z]*$");
    lnameid.style.border="2px red solid";
    if(lanme=="")
    {
        error2.textContent="Please Enter Last Name";
        return false;
    }
    else if(lanme.length<2)
    {
        error2.textContent="Name Must Contain atleast 2 Characters";
        return false;
    }
    else if(lanmePattern.test(lanme)==false)
    {
        error2.textContent="Alphabets only";
        return false;
    }
    else
    {
        lnameid.style.border="2px green solid";
        return true;
    }
}


/* function validate3()
{
    let uageId=document.getElementById('age');
    let error3=document.getElementById('error3');
    error3.textContent="";
    let uage=uageId.value;
    uageId.style.border="2px red solid";
    if(uage=="")
    {
        error3.textContent="Please Enter Age";
        return false;
    }
    else if(uage<20 && uage>40)
    {
        error3.textContent="Age Must be between 20 and 40";
        return false;
    }
    else
    {
        age.style.border="2px green solid";
        return true;
    }
} */

function validate4()
{
    
    let uemailid=document.getElementById('emailid');
    let error4=document.getElementById('error4');
    error4.textContent="";
    let uemail=uemailid.value;
    uemailid.style.border="2px red solid";
    if(uemail=="")
    {
        error4.textContent="Please Enter Email Id";
        return false;
    }
    else if(!uemail.includes('@'))
    {
        error4.textContent="Please enter valid EmailId";
        return false;
    }
    else
    {
        uemailid.style.border="2px green solid";
        return true;
    }
}


function validate7()
{
    
    let unameid=document.getElementById('uname');
    let error7=document.getElementById('error7');
    error7.textContent="";
    let uname=unameid.value;
    unameid.style.border="2px red solid";
    if(uname=="")
    {
        error7.textContent="Please Enter UserName";
        return false;
    }
    else
    {
        unameid.style.border="2px green solid";
        return true;
    }
}

function validate8()
{
    
    let upassId=document.getElementById('upass');
    let error8=document.getElementById('error8');
    error8.textContent="";
    let upass=upassId.value;
    upassId.style.border="2px red solid";
    if(upass=="")
    {
        error8.textContent="Please Enter Password";
        return false;
    }
    else
    {
        upassId.style.border="2px green solid";
        return true;
    }
}


function validate9()
{
    let confirmPasswordid=document.getElementById("confirmpass");
    let error9=document.getElementById("error9");
    error9.textContent="";
    let password=upass.value;
    let confirmPassword=confirmPasswordid.value;
    confirmPasswordid.style.border="2px red solid";
    if(confirmPassword=="")
    {
        error9.textContent="Confirm Password is required";
        return false;
    }
    else if(confirmPassword!=password){
        error9.textContent="Confirm Password must match with password";
        return false;
    }
    else{
        confirmPasswordid.style.border="2px green solid";
        return true;
    }
}
let nodeArray=[fnameid,lnameid,uemailid,unameid,upassId,confirmPasswordid];
function validateForm(){

    let flag1=validate1();
    let flag2=validate2();
   /*  let flag3=validate3(); */
    let flag4=validate4();
    let flag7=validate7();
    let flag8=validate8();
    let flag9=validate9();
    
    let FlagArray=[flag1,flag2,flag4,flag7,flag8,flag9];
    for(i=0;i<FlagArray.length;i++)
    {
        nodeArray[i].focus();
        break;
    }
    return (flag1 && flag2 && flag4 && flag7 && flag8 && flag9);
}