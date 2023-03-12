const categoryList = document.querySelector(".categoryList")
const productList = document.querySelector(".productList")
fetch("https://api.escuelajs.co/api/v1/categories").then(res => res.json())
.then(veri)
fetch("https://api.escuelajs.co/api/v1/products").then(resp => resp.json())
.then(product)
var randomnum = Math.round(Math.random() * 2);
function veri(data){
      data.slice(0,4).forEach(category => {
        // if(category.id <= 5){
          const kategori =  document.createElement("div")
          kategori.classList.add("category")
          kategori.innerHTML = `
          <img src="${category.image}" alt="">
            <span>${category.name}</span>
          `
          categoryList.appendChild(kategori)
        // }
      });
}
function product(veri){
  veri.slice(0,10).forEach(prod => {
    console.log(prod)
    const urun = document.createElement("div")
    urun.classList.add("product")
    urun.innerHTML = `
    <img src="${prod.images[randomnum]}" alt="">
    <p>${prod.title}</p>
    <div class="product-info">
          <span>${prod.price}$</span>
          <button>Add to Card</button>
    </div>
    `
    productList.appendChild(urun)
  })
}

// const input = document.getElementById("product-input")
// const search = document.querySelector(".search")

// search.addEventListener("mouseover", () => {
//   search.style.display = "none";
//   input.style.display = "block"
//   input.style.transition = "2s"
// })
// input.addEventListener("mouseleave", () => {
//   search.style.display = "block";
//   input.style.display = "none"
// })