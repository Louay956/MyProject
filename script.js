const data = [
    {
     image:"./Images/images.jpg",
     name:"chausure pour femme",
     price:50,
    },
];


const orders = {
 products: [],
 totalPrice: 1,
};



const cart = document.querySelector(".cart");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const totalprice = document.querySelector(".totalprice")

function displayCart() {
    if (orders.totalPrice === 0) {
      cart.style.display = "none";
    } else {
      cart.style.display = "flex";
    }
  };
 function displayprice(){
    totalprice.innerHTML=orders.totalPrice;
 }
  function addToCart(item) {
    orders.products.push(item);
    orders.totalPrice += item.price;
    totalprice.innerHTML=orders.totalPrice;
    cart.innerHTML += `
        <div class="grid1">
            <p><img src="${item.image}" alt="${item.name}"></p>
            <h1 class="price">${item.price}</h1>
            <h2 class="details">${item.name}</h2>
         </div>
           `;
    displayCart();
  };

data.forEach(function (v) {
    container.innerHTML += `
           <div class="grid1">
               <p><img src="${v.image}" alt="${v.name}"></p>
               <h1 class="price">${v.price}</h1>
               <h2 class="details">${v.name}</h2>
               <button onclick='addToCart(${JSON.stringify(v)})'>add to cart</button>
           </div>`;
  });
displayCart();





