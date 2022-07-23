let specificdata=JSON.parse(localStorage.getItem("id"))||[];
let data=specificdata.images;
let prices=specificdata.price;
console.log(data)




// console.log(specificdata.images)

let display=(data)=>{
    document.querySelector("#slide>div").innerHTML=null;



//   var box=document.createElement("div")
  var img1=document.createElement("img")
  var img2=document.createElement("img")
  var img3=document.createElement("img")
  var img4=document.createElement("img")
  var img5=document.createElement("img")
 img1.setAttribute("src",data[0])
 img2.setAttribute("src",data[1])
 img3.setAttribute("src",data[2])
 img4.setAttribute("src",data[3])
 img5.setAttribute("src",data[0])
 
 document.getElementById("fimage").append(img1)
 document.getElementById("simage").append(img2)
 document.getElementById("timage").append(img3)
 document.getElementById("frimage").append(img4)
 
 document.getElementById("smallimg").append(img5)
 var h3=document.createElement("h3")
 h3.innerText="Rs "+prices;
 
 document.getElementById("pricy").append(h3)
 
 


    
}

display(data)

document.getElementById("btn").addEventListener("click",function(){
  
  // console.log(data);
  
  let user_data = JSON.parse(localStorage.getItem("items")) || [];
  console.log(user_data);
  user_data.push(specificdata);
  localStorage.setItem("items", JSON.stringify(user_data));
  window.location.href="cart.html"
  
})

// function addtoCart(data) {
//   console.log(data);
//   let user_data = JSON.parse(localStorage.getItem("items")) || [];
//   console.log(user_data);
//   user_data.push(data);
//   localStorage.setItem("items", JSON.stringify(user_data));
// }
