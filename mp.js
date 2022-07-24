


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
import navbar from "./components/navbar.js"
document.querySelector(".navbar").innerHTML = navbar()
 

import footer from "./components/footer.js"
document.querySelector('#footer').innerHTML =footer()

var menData = [
  {
    _id: "6245a9eaa409c91b8eab4353",
    productName: "MAX Printed Round Neck T-shirt",
    price: "1199 ",
    color: "Blue ",
    category: "Men ",
    sub_category: "Casual Shirt",
    images: ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_01-2100.jpg",
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_02-2100.jpg",
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_03-2100.jpg",
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_04-2100.jpg"
   ] ,
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_01-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab4354",
    productName: "MAX Printed Slim Fit Casual Shirt",
    price: "999 ",
    color: "Black",
    category: "Men ",
    sub_category: "Casual Shirt",
    images: ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011450524-Yellow-YELLOW-1000011450524-22062022_01-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011450524-Yellow-YELLOW-1000011450524-22062022_02-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011450524-Yellow-YELLOW-1000011450524-22062022_03-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011450524-Yellow-YELLOW-1000011450524-22062022_04-2100.jpg"
 ] ,
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011450524-Yellow-YELLOW-1000011450524-22062022_01-2100.jpg",
    overview:
      "Update your casual wardrobe with this printed casual shirt which has a spread collar, short sleeves, and straight hemline.",
  },
  {
    _id: "6245a9eaa409c91b8eab4355",
    productName: "MAX Printed Round Neck T-shirt",
    price: "1199 ",
    color: "Blue ",
    category: "Men ",
    sub_category: "Casual Shirt",
    images: ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358668-Grey-GREY-1000011358668-27062022_01-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358668-Grey-GREY-1000011358668-27062022_02-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358668-Grey-GREY-1000011358668-27062022_03-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358668-Grey-GREY-1000011358668-27062022_06-2100.jpg"
 ] ,
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358668-Grey-GREY-1000011358668-27062022_01-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab4356",
    productName: "MAX Checked Slim Fit Casual Shirt",
    price: "899 ",
    color: "Multicolour ",
    category: "Men ",
    sub_category: "Casual Shirt",
    images: ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_01-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_02-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_03-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_04-2100.jpg"
 ] ,
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010346421-Pink-Magenta-1000010346421-8272021_01-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab4357",
    productName: "MAX Checked Slim Fit Smart Casual Shirt",
    price: "999 ",
    color: "Blue ",
    category: "Men ",
    sub_category: "Casual Shirt",
    images: ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_01-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_02-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_03-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_04-2100.jpg"
 ] ,
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010866316-Blue-NAVY-1000010866316-22122021_01-2100.jpg",
    overview:
      "Tailored for the ultimate comfort, this casual shirt is designed with full sleeves, spread collar, full button placket, a patch pocket, and curved hemline.",
  },
  {
    _id: "6245a9eaa409c91b8eab4358",
    productName: "MAX Printed Short Sleeves Regular Fit Casual Shirt",
    price: "799",
    color: "Black ",
    category: "Men ",
    sub_category: "Casual Shirt",
    images: ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_01-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_02-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_03-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_04-2100.jpg"
 ] ,
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010806178-Blue-NAVY-1000010806178-15122021_01-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab4359",
    productName: "MAX Solid Slim Fit Casual Shirt",
    price: "999",
    color: "Yellow ",
    category: "Men ",
    sub_category: "Casual Shirt",
    images: ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_01-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_02-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_03-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_04-2100.jpg"
 ] ,
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010833634-Yellow-Yellow-1000010833634-11302021_01-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab435a",
    productName: "MAX Checked Casual Shirt",
    price: "999",
    color: "Orange",
    category: "Men ",
    sub_category: "Casual Shirt",
    images: ["https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_01-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_02-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_03-2100.jpg",
    "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011358343-Blue-NAVY-1000011358343-27062022_04-2100.jpg"
 ] ,
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010456050-Orange-Rust-1000010456050-9072021_03-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab435b",
    productName: "MAX Textured Smart Fit Casual Shirt",
    price: "799",
    color: "Blue",
    category: "Men",
    sub_category: "Casual Shirt",
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009781563-Blue-BLUE-1000009781563-8122021_01-2100.jpg",
    overview:
      "Designed with textured detailing, this casual shirt features a spread collar and has long sleeves.",
  },
  {
    _id: "6245a9eaa409c91b8eab435c",
    productName: "MAX Washed Slim Fit Denim Shirt",
    price: "999",
    color: "Blue",
    category: "Men ",
    sub_category: "Casual Shirt",
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010480872-Blue-MIDBLUE-1000010480872-15122021_01-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab435d",
    productName: "MAX Printed Short Sleeves Shirt",
    price: "799",
    color: "white",
    category: "Men ",
    sub_category: "Casual Shirt",
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010806165-Beige-BEIGE-1000010806165-2022022_01-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab435e",
    productName: "MAX Solid Full Sleeves Casual Shirt",
    price: "699",
    color: "Green",
    category: "Men ",
    sub_category: "Casual Shirt",
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010531498-Green-Oliveg-1000010531498-7092021_01-2100.jpeg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab435f",
    productName: "MAX Solid Slim Fit Casual Shirt",
    price: "799",
    color: "Black ",
    category: "Men ",
    sub_category: "Casual Shirt",
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010866610-Black-BLACK-1000010866610-12012022_01-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab4360",
    productName: "MAX Printed Slim FIt Casual Shirt",
    price: "999",
    color: "Blue",
    category: "Men ",
    sub_category: "Casual Shirt",
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010866455-Blue-SKYBLUE-1000010866455-22122021_01-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
  {
    _id: "6245a9eaa409c91b8eab4361",
    productName: "MAX Printed Regular Fit Casual Shirt",
    price: "799",
    color: "Green",
    category: "Men ",
    sub_category: "Casual Shirt",
    imageURL:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010806203-Green-GREEN-1000010806203-5012022_01-2100.jpg",
    overview:
      "Amp up your casual collection with this solid casual shirt which has a spread collar, long sleeves with button cuffs, a button placket, and flap pockets.",
  },
];

console.log(menData[0]);

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

displayData();

function displayData() {
  //appending the product image to the container element.
  let container = document.getElementById("product_append");
  container.innerHTML = null;

  for (let i = 0; i < menData.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", "post");

    let image = document.createElement("img");
    image.src = menData[i].imageURL;
    image.setAttribute("id", "productImg");

    let price = document.createElement("h4");
    price.innerHTML = ` &#x20B9 ${menData[i].price}`;

    let title = document.createElement("p");
    title.innerText = menData[i].productName;

    // favourite button
    let favourite = document.createElement("button");
    favourite.innerHTML = `&#10084`;
    favourite.setAttribute("id", "favourite");
    favourite.addEventListener("click", function () {
      addtoWishlist(data);
    });

    // add to basket button creation.//
    let div2 = document.createElement("div");
    div2.id = "div2";

    let basket_div = document.createElement("div");
    basket_div.setAttribute("id", "basket_div");

    let basket = document.createElement("button");
    basket.setAttribute("class", "hide");

    basket.textContent = "ADD TO BASKET";
    basket.addEventListener("click", function () {
      //adding eventlisterner to "Add to cart button"

      addtoCart(menData[i]);
    });

    //basket counter update function to write here.

    basket_div.append(basket);

    div.append(favourite, image, price, title);

    div2.append(div, basket_div);

    div.onclick = () => {
      localStorage.setItem("id", JSON.stringify(menData[i]));
      console.log(menData[i]);
      window.location.href = "specific.html";
    };

    container.append(div2);
  }
}

function addtoCart(data) {
  console.log(data);
  let user_data = JSON.parse(localStorage.getItem("items")) || [];
  console.log(user_data);
  user_data.push(data);
  localStorage.setItem("items", JSON.stringify(user_data));
  alert("Item added to cart")
}
