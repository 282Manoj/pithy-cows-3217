imgArray=["https://lmsin.net/cdn-cgi/image/w=1232,q=85,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-desktop-Women-14JULY2022.png","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner6-desktop-Womenn-20JULY2022A.png","https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner4-desktop-Women-14JULY2022.png","https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner5-desktop-Women-14JULY2022.png"];

console.log("hi....");
let imgNum=0;
let img=document.querySelector("img");
let button=document.querySelectorAll("button");
button[0].addEventListener("click",function(){
  if(imgNum==0){
    imgNum=imgArray.length-1;
  }
  else{
    imgNum--;
  }
  img.src=imgArray[imgNum];
})
button[1].addEventListener("click",function(){
    if(imgNum==imgArray.length-1){
    imgNum=0;
  }
  else{
    imgNum++;
  }
  img.src=imgArray[imgNum];
})