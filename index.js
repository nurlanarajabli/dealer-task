const product = document.querySelector("#productCartBox");
const count=document.querySelector("pro")
let db
function getAllProducts() {
    axios.get("https://dummyjson.com/products").then(res => {
         db = res.data.products;
        db.forEach((item)=> {
            let box = document.createElement('div');
            box.className = "productCartBox";
            box.innerHTML = ` <img
        src = "${item.thumbnail}"
        alt="product"
        style="width:100%;height:100px"
      />
      <div class="cardDesk">
        <h3>${item.title}</h3>
        <p>${item.price}</p>
        <button class="cartBtn" onclick="addToCard(${item.id})">Sebte ekle</button>
      </div>
      `;
            product.appendChild(box);
        })
    })
}


function addToCart(id){
    console.log("click");
    let cart=JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(db.find(item=>item.id==id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

function setCount() {
  let cart = JSON.parse(localStorage.getItem('cart'));
if(cart.length != 0){
  count.innerHTML = cart.length
} 
else {
  count.style.display = 'none'
}
}


window.onload=()=>{
    getAllProducts() 
    setCount()
}
