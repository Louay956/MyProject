const shoes = [
  { 
   image:"./Images/images.jpg",
   name:"chausure pour femme",
   price:50,
   title:"shoes"   
  },
  { 
    image:"./Images/images.jpg",
    name:"chausure pour femme",
    price:50,
    title:"shoes"   
   },
   { 
    image:"./Images/images.jpg",
    name:"chausure pour femme",
    price:50,
    title:"shoes"   
   },
  
];
const Tshirt = [
  { 
   image:"./Images/images.jpg",
   name:"tshirt pour homme",
   price:300,
   title:"Tshirt"   
  },
  
];
const Short = [
  { 
   image:"./Images/images.jpg",
   name:"tshirt pour homme",
   price:500,
   title:"Short"   
  },
];


const orders = {
 products: [],
 totalPrice: 0,
};


const cart = document.querySelector(".cart")
const commandes = document.querySelector(".commandes");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const newtotalprice = document.querySelector("#newtotalprice")
const title = document.querySelector(".title")

function displayCart() {
    if (orders.totalPrice === 0) {
      cart.style.display = "none";
    } else {
      cart.style.display = "flex";
    }
  };
 function displayprice(){
  console.log("Displaying total price:", orders.totalPrice);
  newtotalprice.innerHTML = orders.totalPrice;
 }
  function addToCart(item) {
    orders.products.push(item);
    orders.totalPrice += item.price;
    displayprice();
    commandes.innerHTML += `
        <div class="grid1">
            <h1 class="price">${item.price}</h1>
            <h2 class="details">${item.name}</h2>
         </div>
           `;
    displayCart();
  };
function shoesData(T){
  container.innerHTML ="";
T.forEach(function (v) {
  title.innerHTML= v.title;
  container.innerHTML += `
           <div class="grid1">
               <p><img src="${v.image}" alt="${v.name}"></p>
               <h1 class="price">${v.price}</h1>
               <h2 class="details">${v.name}</h2>
               <button onclick='addToCart(${JSON.stringify(v)})'>add to cart</button>
           </div>`;
  });
  displayprice();
};
function TshirtData(T){
  container.innerHTML ="";
  T.forEach(function (v) {
    title.innerHTML= v.title;
    container.innerHTML += `
             <div class="grid1">
                 <p><img src="${v.image}" alt="${v.name}"></p>
                 <h1 class="price">${v.price}</h1>
                 <h2 class="details">${v.name}</h2>
                 <button onclick='addToCart(${JSON.stringify(v)})'>add to cart</button>
             </div>`;
    });
    displayprice();
  };
  function ShortData(T){
    container.innerHTML ="";
    T.forEach(function (v) {
      title.innerHTML= v.title;
      container.innerHTML += `
               <div class="grid1">
                   <p><img src="${v.image}" alt="${v.name}"></p>
                   <h1 class="price">${v.price}</h1>
                   <h2 class="details">${v.name}</h2>
                   <button onclick='addToCart(${JSON.stringify(v)})'>add to cart</button>
               </div>`;
      });
      displayprice();
    };
shoesData(shoes);
displayCart();





