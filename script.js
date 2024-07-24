const shoes = [
  { 
   image:"./Images/images.jpg",
   name:"chausure pour femme",
   price:50,
   title:"shoes"   
  },
  {
    name: "Chaussettes Marche Sportive/Nordique WS 500 Invisible Fresh Rouge/Orange/Bleu",
    img: "https://contents.mediadecathlon.com/p2299359/k$3f2148a321ee4b26ce4ba39a74b7b24e/chaussettes-marche-sportiveslashnordique-ws-500-invisible-fresh-rouge-slash-orange-slashbleu.jpg?format=auto&quality=60&f=200x200",
    price: 9.99
  },
  {
    name: "Chaussures Aquatiques Aquashoes 100 Grises Foncées",
    img: "https://contents.mediadecathlon.com/p1163214/k$35cfac81a02191edb8c6b5aafe0ce645/chaussures-aquatiques-aquashoes-100-grises-foncees.jpg?format=auto&quality=60&f=200x200",
    price: 14.99
  },
  
];
const Tshirt = [
  {
    name: "Tee-Shirt Running Run Dry Blanc Cassé Homme",
    img: "https://contents.mediadecathlon.com/p2617560/k$dcb853891a3ec26b559a15f685c11c7f/tee-shirt-running-run-dry-blanc-casse-homme.jpg?format=auto&quality=60&f=200x200",
    price: 19.99
  },
  {
    name: "T-Shirt de Randonnée Nature NH500 Homme",
    img: "https://contents.mediadecathlon.com/p2194939/k$536cc90300b392834a030f81b2cff874/t-shirt-de-randonnee-nature-nh500-homme.jpg?format=auto&quality=60&f=200x200",
    price: 24.99
  },
  
];
const Short = [
  {
    name: "Pantalon Chasse 300 Vert Renfort",
    img: "https://contents.mediadecathlon.com/p41216/k$a88b9778accc5021b02de133731631b1/pantalon-chasse-300-vert-renfort.jpg?format=auto&quality=60&f=200x200",
    price: 39.99
  },
  {
    name: "Short de Football Eco-Conçu Adulte F100 Blanc",
    img: "https://contents.mediadecathlon.com/p1604447/k$3700d937754a01f5d1c82fb5b57abb80/short-de-football-eco-concu-adulte-f100-blanc.jpg?format=auto&quality=60&f=200x200",
    price: 12.99
  },
];
const Watch = [
  { 
    image:"./Images/images.jpg",
    name:"chausure pour femme",
    price:50,
    title:"shoes"   
   },
]
const Maillots = [
  { 
    image:"./Images/images.jpg",
    name:"chausure pour femme",
    price:50,
    title:"shoes"   
   },
]
const Masque = [
  { 
    image:"./Images/images.jpg",
    name:"chausure pour femme",
    price:50,
    title:"shoes"   
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
const title = document.querySelector(".title");
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
               <p><img src="${v.image}" alt="${v.name}" class="img2"></p>
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
    title.innerHTML= v.title;
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
      title.innerHTML= v.title;
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
        title.innerHTML= v.title;
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
          title.innerHTML= v.title;
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
shoesData(shoes);
displayCart();





