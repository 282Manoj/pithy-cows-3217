/* let url = `https://max-fashion-backend.herokuapp.com/womens`;

 async function FetchApi() {
 
     try {
         let res = await fetch(url);
         let data = await res.json();
 
         console.log(data);
         displayData(data)
         
     } catch (err) {
         console.log("error", error);
     }
 };
 
 FetchApi(); */

 var womenData = [{"_id":"6244480900b2438e325e2d23","productName":"MAX Printed Round Neck T-shirt","price":"299 ","color":"Blue ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011069467-Blue-LIGHTBLUE-1000011069467-10032022_01-2100.jpg","overview":"Comfortable and elegant, this printed T-shirt with a round neck and short sleeves is a perfect addition to your casual wardrobe. Type : Tees,Design : Printed,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d24","productName":"MAX Textured Round Neck Crop Top","price":"699 ","color":"Pink ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011047617-Pink-PINK-1000011047617-10032022_01-2100.jpg ","overview":"This modish top is defined by a textured design on the surface, along with full sleeves and a round neck. It comes with a Kriss cross pattern on the waist to complete the look. Type : Crop Tops,Design : Textured,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d25","productName":"MAX Printed Round Neck T-shirt","price":"299 ","color":"Pink ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010642041-Pink-Pink-1000010642041-11182021_01-2100.jpg ","overview":"Maximize comfort with this printed T-shirt designed with a round neck and short sleeves. Type : Tees,Design : Printed,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d26","productName":"MAX Striped Styled Back Top","price":"399","color":"Blue","category":"Women","sub_category":"Tops","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010172509-Blue-Ink-1000010172509-6252021_01-2100.jpg","overview":"Enhance your style with this striped top, which is designed with three-quarter sleeves and a round neckline. Adding to the style quotient, this top is detailed with a styled back structure.. Type : Casual Tops,Design : Striped,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d27","productName":"MAX Printed Round Neck T-shirt","price":"249 ","color":"Grey ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010468318-Grey-Grey-1000010468318-10202021_01-2100.jpg ","overview":"An ideal pick for a casual occasion, this printed T-shirt features a round neckline and half sleeves. Type : T-shirts, Design : Printed,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d28","productName":"MAX Textured Knitted Top","price":"699 ","color":"Black ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010684155-Black-Black-1000010684155-9032021_01-2100.jpg ","overview":"Enhance your style with this textured top, which is designed with half-sleeves and a round neckline.. Type : Casual Tops,Design : Textured,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d29","productName":"MAX Printed Round Neck T-shirt","price":"249 ","color":"Grey ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010468448-Grey-Greymel-1000010468448-10202021_01-2100.jpg ","overview":"Jazz up the casual look with this t-shirt designed with typographic prints along with half sleeves and a round neckline. Type : T-shirts,Design : Printed, Neckline : Round Neck, Style : Casual"},{"_id":"6244480900b2438e325e2d2a","productName":"MAX Printed Round Neck Top","price":"699 ","color":"Belge ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010684130-Beige-Ivory-1000010684130-8272021_01-2100.jpg","overview":"Designed with a printed surface, round neck and short sleeves, this knitted top from MAX are super casual and comfortable making it the perfect ensemble. Type : Fashion Tops, Design : Printed, Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d2b","productName":"MAX Typographic Print Round Neck T-shirt","price":"249 ","color":"Green ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010392049-Green-Oliveg-1000010392049-10132021_01-2100.jpg ","overview":"An ideal pick for a casual wardrobe, this trendy t-shirt is designed with bold typographic prints, short sleeves and a round neckline. Type : Tees, Design : Printed, Neckline : Round Neck, Style : Casual"},{"_id":"6244480900b2438e325e2d2c","productName":"MAX Typographic Print Round Neck T-shirt","price":"249 ","color":"pink ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010392335-Pink-Pink-1000010392335-10132021_01-2100.jpg ","overview":"An ideal pick for a casual wardrobe, this trendy t-shirt is designed with bold prints, short sleeves and a round neckline.Type : Tees,Design : Printed,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d2d","productName":"MAX Printed Round Neck T-shirt","price":"249 ","color":"Grey","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010468448-Grey-Greymel-1000010468448-10202021_01-2100.jpg ","overview":"Jazz up the casual look with this t-shirt designed with typographic prints along with half sleeves and a round neckline. Type : Tees,Design : Printed,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d2e","productName":"MAX Printed Round Neck T-shirt","price":"299 ","color":"Black ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010642054-Black-BLACK-1000010642054-8122021_01-2100.jpg ","overview":"Maximize comfort with this printed T-shirt designed with a round neck and short sleeves. Type : Tees,Design : Printed,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d2f","productName":"MAX Printed Round Neck T-shirt","price":"249 ","color":"Grey ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010392257-Grey-Grey-1000010392257-9222021_01-2100.jpg ","overview":"Maximize comfort with this printed T-shirt designed with a round neck and short sleeves.Type : Tees,Design : Printed,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d30","productName":"MAX Solid Notched Neck Knitted Top","price":"399","color":"Pink ","category":"Women ","sub_category":"Tops ","imageURL":" https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010026899-Pink-LightPink-1000010026899-4092021_01-2100.jpg","overview":"Detailed with a solid pattern, this top is designed with a notched neck and short sleeves. Type : Casual Tops,Design : Solid,Style : Casual"},{"_id":"6244480900b2438e325e2d31","productName":"MAX Printed Round Neck T-shirt","price":"249 ","color":"Yellow ","category":"Women ","sub_category":"Tops ","imageURL":" https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010468305-Yellow-Yellow-1000010468305-10202021_01-2100.jpg","overview":"Jazz up the casual look with this t-shirt designed with typographic prints along with half sleeves and a round neckline. Type : T-shirts,Design : Printed,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d32","productName":"MAX Printed Round Neck T-shirt","price":"599 ","color":"Black ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010782115-Black-BLACK-1000010782115-15122021_01-2100.jpg ","overview":"Maximize comfort with this printed t-shirt designed with a round neck and three-quarter sleeves.. Type : Round Neck,Design : Printed, Style : Casual"},{"_id":"6244480900b2438e325e2d33","productName":"MAX Printed Round Neck T-shirt","price":"399 ","color":"Grey ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010019005-Grey-Grey-1000010019005-4092021_01-2100.jpg","overview":"Maximize comfort with this printed T-shirt designed with a round neck and short sleeves. Type : Tees,Design : Printed,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d34","productName":"MAX Printed Hooded T-shirt","price":"699 ","color":"Green","category":"Women ","sub_category":"Tops ","imageURL":" https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010782153-Green-Oliveg-1000010782153-11112021_01-2100.jpg","overview":"Elevate your workout outfit with this sports T-shirt designed with the printed surface, short sleeves, and hooded neckline offering comfort and flexibility during your workouts. Design : Printed,Sleeve Length : Half Sleeves,Fabric : Cotton Blend"},{"_id":"6244480900b2438e325e2d35","productName":"MAX Textured Knitted Top","price":"699 ","color":"Green","category":"Women ","sub_category":"Tops ","imageURL":" https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010684155-Green-Oliveg-1000010684155-9032021_01-2100.jpg","overview":"Enhance your style with this textured top, which is designed with half-sleeves and a round neckline. Type : Casual Tops,Design : Textured,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d36","productName":"MAX Solid Round Neck T-shirt","price":"299 ","color":"Blue ","category":"Women ","sub_category":"Tops ","imageURL":" https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010385693-Blue-Malibu-1000010385693-11302021_01-2100.jpg","overview":"An ideal pick for a casual wardrobe, this trendy t-shirt is designed with a solid surface, short sleeves and a round neckline. Type : Tees,Design : Solid,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d37","productName":"MAX Printed Round Neck T-shirt","price":"299 ","color":"Blue ","category":"Women ","sub_category":"Tops ","imageURL":" https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010255909-Blue-Navy-1000010255909-11042021-1_01-2100.jpg","overview":"Maximize comfort with this printed T-shirt designed with a round neck and short sleeves. Type : Tees,Design : Printed,Neckline : Round Neck,Style : Casual"},{"_id":"6244480900b2438e325e2d38","productName":"MAX Floral Printed Top","price":"799 ","color":"Multicolour ","category":"Women ","sub_category":"Tops ","imageURL":"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010716721-Multicolour-M-1000010716721-5012022_01-2100.jpg ","overview":"Make a style quotient with this top that is defined by floral prints, a round neck and three-quarter sleeves. Type : Fashion Tops, Design : Printed,Style : Casual"}]
 
 console.log(womenData[0])

/* 
 function sortbyprice() {
     let select=document.getElementById("sortPriced");
     if(select.value=="Low") {
           women_kurti.sort(function(a,b){return a.price - b.price;});
     }
     if(select.value=="High") {
           women_kurti.sort(function(a,b){return b.price - a.price;});
     }
     displayData(women_kurti);
     console.log("women_kurti:",women_kurti);

 } */

displayData()

function displayData(){

  //appending the product image to the container element.
let container = document.getElementById("product_append");
container.innerHTML = null;

for(let i =0;i<womenData.length ;i++){


         
  let div = document.createElement("div");
  div.setAttribute("id", "post");
 

  let image = document.createElement("img");
  image.src = womenData[i].imageURL;
  image.setAttribute("id", "productImg");

  let price = document.createElement("h4");
  price.innerHTML = ` &#x20B9 ${womenData[i].price}`;

  let title = document.createElement("p");
  title.innerText = womenData[i].productName;

  // favourite button 
  let favourite= document.createElement("button");
  favourite.innerHTML =`&#10084`;  
  favourite.setAttribute("id", "favourite")
  favourite.addEventListener("click", function () {
    addtoWishlist(data);
  })

  // add to basket button creation.//
  let div2=document.createElement("div");
  div2.id="div2";
  

  let basket_div= document.createElement("div");
   basket_div.setAttribute("id", "basket_div");

  let basket = document.createElement("button");
  basket.setAttribute("class", "hide");

  basket.textContent = "ADD TO BASKET";
  basket.addEventListener("click", function() {
     //adding eventlisterner to "Add to cart button"
     
    addtoCart(womenData[i])
})

      

      //basket counter update function to write here. 
  

  basket_div.append(basket);
  
  
  div.append(favourite,image,price,title);

  div2.append(div,basket_div);

  div.onclick = () => {
    localStorage.setItem("id", (data._id));
    window.location.href = "";
  };

     container.append(div2);


}
}

function addtoCart(data){
    console.log(data)
    let user_data=JSON.parse(localStorage.getItem("items"))||[];
    console.log(user_data)
    user_data.push(data)
    localStorage.setItem("items", JSON.stringify(user_data));
    alert("Item added to cart")

}