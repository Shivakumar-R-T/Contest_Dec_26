const User=JSON.parse(localStorage.getItem('user'));

document.querySelector('.Pname').innerHTML=User[0].name;
// console.log(User);
// console.log(User[0].name);

document.querySelector('.Ppassword').innerHTML=User[0].PassWord;
document.querySelector('.Pmail').innerHTML=User[0].email;
function Logout()
{
  localStorage.clear();
  location.href='./index.html';
  
}