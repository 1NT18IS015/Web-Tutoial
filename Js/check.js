let details=[{
    name:"Garvit",
    gmail:"garvit.tan@gmail.com"
} ]

let new_user;
let i=2;
   
function validate(){
  
    let new1=document.getElementById('check-name').value;
    if(details.some(n=>n.name===new1)) 
    location.href="new.html";
    else
     document.getElementById("container").style.display='block';
}
function submit_det(){
   
     new_user=new Object()
     details[i]=new_user
     i++
      new_user.name=document.getElementById('check_name').value
      new_user.gmail=document.getElementById('check_gmail' ).value  
    document.forms[0].reset();
}
