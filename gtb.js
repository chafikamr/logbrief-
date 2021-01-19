fetch("https://api.github.com/users")
.then(Response => Response.json())
.then(

function (data)    {
   var users_image = document.getElementsByClassName("usr-img");
   var users_username = document.getElementsByClassName("usrname");

for(i=0;i<users_image.length;i++){
    users_image[i].src = data[i].avatar_url;
    users_username[i].innerHTML = data[i].login;

}
} )
// cal profile function 
 

$(document).ready(function(){
     

    $("#searchbtn").click(function(){
    
      
       var srch_inp= document.getElementById("srch").value;
    var myrequest = new XMLHttpRequest();
      myrequest.onreadystatechange = function(){
              var info = this.responseText;
              var jsonInfo =  JSON.parse(info);
                
        if(this.status===200){
            document.getElementById("usrn").innerHTML =  jsonInfo.login;
            document.getElementById("Followers").innerHTML =  jsonInfo.followers;
            document.getElementById("Following").innerHTML =  jsonInfo.following;
            document.getElementById("mdl-img").src= jsonInfo.avatar_url;
            document.getElementsByClassName("modal")[0].style.display="flex";
            document.getElementById("profi").href= jsonInfo.html_url;

         console.log(jsonInfo)
            
        }


      };
      var lnk = "https://api.github.com/users/"+srch_inp;
    myrequest.open('GET',lnk ,true);
    myrequest.send()





    })
    $(".close").click(function(){

      document.getElementsByClassName("modal")[0].style.display="none";
    })

})
// Sing In page  get informations  
 function join(){
    var usrname_inp = document.getElementById("get-username");
    var password_inp = document.getElementById("get-pswrd");
    var password_two_inp = document.getElementById("get-pswrd-two");
// put the sing up informations into an object ;
   
    if (password_inp.value!=password_two_inp.value){
      alert(" the two passwords are not the same ")
    }else{
       var singUpObj={
         "usrname": usrname_inp.value,
         "password": password_inp.value,
         "password_two": password_two_inp.value};
       localStorage.setItem("usrname",usrname_inp.value);
       localStorage.setItem("password",password_inp.value);
       window.location.href="log.html";

    }


    
   console.log(singUpObj)
};

// log in page informations 
function login(){
   var usrname_inp_log = document.getElementById("login-usr-inp");
    var password_inp_log = document.getElementById("login-psw-inp");
    if( localStorage.getItem("usrname")==usrname_inp_log.value && localStorage.getItem("usrname")== password_inp_log.value ){
             window.location.href="index.html";
    }else if(localStorage.getItem("usrname")!=usrname_inp_log.value){
      alert("your username is not exist");
    }else if (localStorage.getItem("usrname")== password_inp_log.value) {
      alert("invalid password")
    }

}
