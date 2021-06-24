let products = [
  {name:"Kit Kat Strawberry Cake", image:"kit-kat-strawberry-reduced.jpg", price:85},
  {name:"Carrot Cherry Cake", image:"carrot-cake-cherry-reduced.jpg", price:65},
  {name:"Kinder Bueno White Chocolate Cake", image:"kinder-bueno-white-chocolate-reduced.jpg", price:75},
  {name:"Princess Cake", image:"princess-cake-reduced.jpg", price:45}
];

let cart = []


function load() {
  products.forEach((i, index)=> {
      
      let item = document.createElement('div');
      item.innerHTML = `
      <div class="product">
      <img src="images/${i.image}">
      <p class="name">${i.name}</p>
      <p class="price">£${i.price}</p>
      <button class="add">Add to cart</button>
      </div>
      `
      const items = document.getElementById('items');

      item.getElementsByClassName('add')[0].addEventListener('click', ()=>{
          addTocart(index)
      });

      items.append(item)
  });
}

load();

function addTocart(index){
  cart.push(index)
  localStorage.setItem('cart', JSON.stringify(cart))
  alert(`${products[index].name} added to cart`)
}