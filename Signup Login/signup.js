var userarr=JSON.parse(localStorage.getItem("userinfo"))||[];
var mainarr=JSON.parse(localStorage.getItem("maininfo")) || [];

for(var i=0;i<mainarr.length;i++){
    if(Number(mainarr[i].mob)==Number(document.getElementById("moby").value)){
        

     document.querySelector("#container").style.display="none"
     document.querySelector("#address").style.display="none"
     document.querySelector("#link").style.display="none"
    
     document.querySelector("#otppage").style.display="block"
    
    
    
     let otp="";
     for(let i=0;i<3;i++){
            otp+=Math.floor(Math.random()*10)
         }
        
        
        
        // alert(`Your OTP is ${otp}`)
        
        if(otp==document.getElementById("otps").value){
                alert(`Welcome ${mainarr[i].usern}`)
}
    }



}




function play(){
    
    

    document.querySelector("#container").style.display="block"
    document.querySelector("#otppage").style.display="none"
    document.querySelector("#link").style.display="none"
    document.querySelector("#link").style.display="none"
    document.querySelector("#login").style.display="none"

    
    
    
    
    
    
    

};

document.querySelector("#iconz").addEventListener("click",function(){
    
    
    document.querySelector("#container").style.display="none"
    document.querySelector("#otppage").style.display="none"
    
    
    
    
    
})

document.querySelector("#iconz").addEventListener("click",function(){
    document.querySelector("#otppage").style.display="none"
    
})

document.querySelector("#btn1").addEventListener("click",function(){
    
    
    
    
    
    
    
    
    document.querySelector("#container").style.display="none"
    document.querySelector("#otppage").style.display="block"
    
    
    
    
    
    //  console.log(userdata)
    
    
    
    
    

    let otp="";
    for(let i=0;i<3;i++){
        otp+=Math.floor(Math.random()*10)
 }


   
 alert(`Your OTP is ${otp}`)
 //  return Number(otp)
 console.log(otp)
 
 var userdata={
     mob:document.getElementById("moby").value,
     code:otp,
     usern:"",
    }
    
    
    userarr.push(userdata)
    localStorage.setItem("userinfo",JSON.stringify(userarr))
    
     console.log(userdata)
    
    
    
})




function checkotp(){
    if(document.getElementById("otps").value==userarr.code){
        alert("success")
    }

var otp=document.getElementById("otps").value;

for(var i=0;i<userarr.length;i++){
    if(userarr[i].code==Number(otp)){
        alert("OTP verification successfull")
        document.querySelector("#otppage").style.display="none"
        document.querySelector("#link").style.display="block"


    }

 
}
     
}


function proceed(){
    document.querySelector("#link").style.display="none"
    
    
    document.querySelector("#address").style.display="block"

}

function back(){
    document.querySelector("#address").style.display="none"
    document.querySelector("#link").style.display="block"



}


function created(){

    // localStorage.clear()
    var username=document.getElementById("fname").value;
    // console.log(username)
    
var userdata={




    mob:document.getElementById("moby").value,
    // code:userarr.code,
    usern:username,
 }
 
//  mainarr.push(userdata)
 mainarr.push(userdata)
 localStorage.setItem("userinfo",JSON.stringify(mainarr))
    
    alert(`Welcome ${username}`)
}

// function login(){
    

// function notp(){
//     // if(document.getElementById("otps").value==userarr.code){
//     //     alert("success")
//     // }

//     let otp="";
//     for(let i=0;i<3;i++){
//         otp+=Math.floor(Math.random()*10)
//     }
    
    
    
//     alert(`Your OTP is ${otp}`)
//     document.querySelector("#otppage").style.display="block"
//     document.querySelector("#login").style.display="none"
// // var otps=document.getElementById("lmob").value;


      
    




// }
// notp()

// function checkotp1(){


    
// function checkotp(){
//     if(document.getElementById("otps").value==otp){
//         alert("success")
//     }

// var otp=document.getElementById("otps").value;

//     if(otp==Number(otp)){
//         alert("OTP verification successfull")
//         document.querySelector("#otppage").style.display="none"
//         document.querySelector("#link").style.display="block"
  

    

 
// }

// }
// checkotp()
// }
// checkotp1()

// }