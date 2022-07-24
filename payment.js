let cartData=JSON.parse(localStorage.getItem("items"))||[];
console.log(cartData);
let left=document.getElementById('left');
console.log(left)
function display(cartData){
 cartData.forEach(function(ele){
    let div=document.createElement("div");
    let div1=document.createElement("div");
    let img=document.createElement("img");
    img.src=ele.imageURL;
    let div2=document.getElementById("div");
    let name=document.createElement("p");
    name.innerText=ele.productName;
    let price=document.createElement("p");
    price.innerText=ele.price;
    div1.append(img,name,price);
    // div2.append(price)
    div.append(div1)
    
    left.append(div)
})
}

display(cartData)

document.getElementById("placeOrder").addEventListener("click",function(){
    window.location.href="thanks.html"
})

