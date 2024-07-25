const shoes = [
  { 
   name:"chausure pour femme",
   image:"./Images/shoes/prod15.jpeg",
   price:50,   
  },
  {
    name: "Nordique WS 500 ",
    image: "./Images/shoes/prod13.jpeg",
    price: 19
  },
  {
    name: "TARMAK",
    image: "./Images/shoes/prod12.jpeg",
    price: 99
  },
  {
    name: "ARTENGO",
    image: "./Images/shoes/prod14.jpeg",
    price: 120
  },
  {
    name: "AQUASHOES 100 ",
    image: "./Images/shoes/prod11.jpeg",
    price: 14,
    title:"Shoes"  
  },
  
];
const Tshirt = [
  {
    name: "Tee-Shirt Running ",
    image: "./Images/tshirt/tshirt1.jpeg",
    price: 19,
    title:"Tshirt"
  },
  {
    name: "DOMYOS",
    image: "./Images/tshirt/tshirt2.jpeg",
    price: 49,
    title:"Tshirt"
  },
  {
    name: "KIPRUN",
    image: "./Images/tshirt/tshirt3.jpeg",
    price: 39,
    title:"Tshirt"
  },
  {
    name: "QUECHUA T-shirt",
    image: "./Images/tshirt/tshirt4.jpeg",
    price: 179,
    title:"Tshirt"
  },
  {
    name: "Artengo T-shirt",
    image: "./Images/tshirt/tshirt5.jpeg",
    price: 45,
    title:"Tshirt"
  },
  
];
const Short = [
  {
    name: "OLAIAN N300",
    image: "./Images/Short/short1.jpeg",
    price: 39
  },
  {
    name: "ARTENGO",
    image: "./Images/Short/short2.jpeg",
    price: 59
  },
  {
    name: "OLAIAN",
    image: "./Images/Short/short3.jpeg",
    price: 40
  },
  {
    name: "KIPSTA",
    image: "./Images/Short/short4.jpeg",
    price: 109
  },
  {
    name: "QUECHUA",
    image: "./Images/Short/short5.jpeg",
    price: 62,
    title: "Short"
  },
];
const Watch = [
  { 
    image:"./Images/watch/watch1.jpeg",
    name:"chausure pour femme",
    price:50,
    title:"Montres"   
   },
   { 
    image:"./Images/watch/watch2.jpeg",
    name:"KALENGI",
    price:70,
    title:"Montres"   
   },
   { 
    image:"./Images/watch/watch3.jpeg",
    name:"NABAIJI",
    price:140,
    title:"Montres"   
   },
   { 
    image:"./Images/watch/watch4.jpeg",
    name:"DECATHLON",
    price:49,
    title:"Montres"   
   },
   { 
    image:"./Images/watch/watch5.jpeg",
    name:"CAPERLAN",
    price:90,
    title:"Montres"   
   },
   { 
    image:"./Images/watch/watch6.jpeg",
    name:"KIPRUN",
    price:90,
    title:"Montres"   
   },
]
const Maillots = [
  { 
    image:"./Images/maillots/mm1.jpeg",
    name:"OLAIAN",
    price:50,
    title:"Maillots"   
   },
   { 
    image:"./Images/maillots/mm2.jpeg",
    name:"NABAIJI",
    price:90,
    title:"Maillots"   
   },
   { 
    image:"./Images/maillots/mm3.jpeg",
    name:"OLAIAN",
    price:150,
    title:"Maillots"   
   },
   { 
    image:"./Images/maillots/mm4.jpeg",
    name:"KALENJI",
    price:110,
    title:"Maillots"   
   },
   { 
    image:"./Images/maillots/mm5.jpeg",
    name:"ROCKRIDER",
    price:210,
    title:"Maillots"   
   },
]
const Masque = [
  { 
    image:"./Images/masques/m1.jpeg",
    name:"SUBEA",
    price:20,
    title:"Masque"   
   },
   { 
    image:"./Images/masques/m2.jpeg",
    name:"FOUGANZA",
    price:15,
    title:"Masque"   
   },
   { 
    image:"./Images/masques/m3.jpeg",
    name:"FORCLAZ",
    price:59,
    title:"Masque"   
   },
   { 
    image:"./Images/masques/m4.jpeg",
    name:"NABAIJI",
    price:79,
    title:"Masque"   
   },
   { 
    image:"./Images/masques/m5.jpeg",
    name:"KALENJI",
    price:110,
    title:"Masque"   
   },
]


// Initialize orders if not in localStorage
if (!localStorage.getItem("orders")) {
  const orders = {
    products: [],
    totalPrice: 0,
  };
  localStorage.setItem("orders", JSON.stringify(orders));
}

const orders = JSON.parse(localStorage.getItem("orders"));

const cart = document.querySelector(".cart")
const commandes = document.querySelector(".commandes");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const newtotalprice = document.querySelector("#newtotalprice");
const titles = document.querySelector(".title");
const catalogue = document.querySelector(".catalogue");
const market = document.querySelector(".market");
const home = document.querySelector(".home");

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
displayCart();

function addToCart(item) {
  orders.products.push(item);
  localStorage.setItem("orders",JSON.stringify(orders));
  orders.totalPrice += item.price;
  displayprice();
  commandes.innerHTML += `
      <div class="grid2">
          <h4 class="details">${item.name}</h4>
          <h4 class="price">${item.price}</h4>
       </div>
         `;
  displayCart();
};

function shoesData(T){
  container.innerHTML ="";
  T.forEach(function (v) {
  titles.innerHTML= v.title;
  container.innerHTML += `
           <div class="grid1">
               <p><img src="${v.image}" alt="${v.name}" class="img2"></p>
               <h1 class="details">${v.name}</h1>
               <h1 class="price">${v.price}</h1>
               <button onclick='addToCart(${JSON.stringify(v)})'>add to cart</button>
           </div>`;
  });
  displayprice();
  };

function TshirtData(T){
container.innerHTML ="";
T.forEach(function (v) {
  titles.innerHTML= v.title;
  container.innerHTML += `
           <div class="grid1">
               <p><img src="${v.image}" alt="${v.name}" class="img2"></p>
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
    titles.innerHTML= v.title;
    container.innerHTML += `
             <div class="grid1">
                 <p><img src="${v.image}" alt="${v.name}" class="img2"></p>
                 <h1 class="price">${v.price}</h1>
                 <h2 class="details">${v.name}</h2>
                 <button onclick='addToCart(${JSON.stringify(v)})'>add to cart</button>
             </div>`;
    });
    displayprice();
  };

  function WatchData(T){
    container.innerHTML ="";
    T.forEach(function (v) {
      titles.innerHTML= v.title;
      container.innerHTML += `
               <div class="grid1">
                   <p><img src="${v.image}" alt="${v.name}" class="img2"></p>
                   <h1 class="price">${v.price}</h1>
                   <h2 class="details">${v.name}</h2>
                   <button onclick='addToCart(${JSON.stringify(v)})'>add to cart</button>
               </div>`;
      });
      displayprice();
    };

    function MaillotsData(T){
      container.innerHTML ="";
      T.forEach(function (v) {
        titles.innerHTML= v.title;
        container.innerHTML += `
                 <div class="grid1">
                     <p><img src="${v.image}" alt="${v.name}" class="img2"></p>
                     <h1 class="price">${v.price}</h1>
                     <h2 class="details">${v.name}</h2>
                     <button onclick='addToCart(${JSON.stringify(v)})'>add to cart</button>
                 </div>`;
        });
        displayprice();
      };

      function MasqueData(T){
        container.innerHTML ="";
        T.forEach(function (v) {
          titles.innerHTML= v.title;
          container.innerHTML += `
                   <div class="grid1">
                       <p><img src="${v.image}" alt="${v.name}" class="img2"></p>
                       <h1 class="price">${v.price}</h1>
                       <h2 class="details">${v.name}</h2>
                       <button onclick='addToCart(${JSON.stringify(v)})'>add to cart</button>
                   </div>`;
          });
          displayprice();
        };


 ShortData(Short);
displayCart();





