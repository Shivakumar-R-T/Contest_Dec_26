const name=document.querySelector('.name');
const mail=document.querySelector('.mail');
const password1=document.querySelector('.password1')
const password2=document.querySelector('.password2')

const msg=document.querySelector('#message');






 function getDetails()
{
  const nameval=name.value;
  const Email=mail.value;
  const pass1Val=password1.value;
  const pass2Val=password2.value;
  const User={};


  msg.style.color='red';

  if(nameval==''||Email==''||pass1Val==''||pass2Val=='')
  {
    msg.innerHTML=" All feild are mandatery";
  }
  else if(pass1Val!=pass2Val)
  {
    msg.innerHTML="Password is not matching"
  }

  else{

   msg.innerHTML="Successfully Signed Up";
   msg.style.color='green';
   const token=(Math.random() +1).toString(36).substring(1);
  
   localStorage.setItem('user',
    JSON.stringify([
      {
        name:nameval,
        PassWord:pass1Val,
        access_token:token,
        email:Email

      }
    ]))
   

   setTimeout(()=>{

    
    location.href ='./profile.html';
    
  
   
 
   },1000)
  
   
  } 
}













