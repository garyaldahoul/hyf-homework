const productsCountainer = document.getElementById("productsCountainer")
const nameCountaier = document.getElementById("nameCountainer")
const total = document.getElementById("total")
const searchProductInput = document.getElementById("searchProduct")
const searchButton = document.getElementById("searchButton")
const randomNumber = Math.floor(Math.random() *10) + 1
console.log(randomNumber)
let allProducts = []



class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }

    convertToCurrency(currency){
      fetch(`https://api.exchangerate-api.com/v4/latest/dkk`)
      .then((req)=>req.json())
      .then((data)=>{
        console.log(this.price)
        return this.price = this.price *data.rates[`${currency}`]
      })
    }
    
  }


  class ShoppingCart {
      
    
    constructor() {
      this.products = [];
      searchButton.onclick = this.searchProduct.bind(this);
    }
   
  
    addProduct(product) {
      // Implement functionality here
      this.products.push(product)
      console.log(this.products)
      console.log(allProducts)
    }
  
    removeProduct(product) {
      // Implement functionality here
      this.products =this.products.filter((pro)=>pro.name!==product.name)

      console.log(this.products)
      this.renderProducts()
    }
  
    searchProduct() {
      const productText = searchProduct.value 
      // Implement functionality here
      this.products = this.products.filter((pro)=>pro.name===productText)
      console.log(this.products)
      this.renderProducts()
    }
  
    getTotal() {
      // Implement functionality here
      this.total = this.products.map((pro)=>pro.price).reduce((a,b)=>a+b,0)
      //total.innerHTML=`${this.total}`
      return this.total
      console.log(this.total)
    }
  
    renderProducts() {
      // Implement functionality here
      productsCountainer.innerHTML=""
      const total = document.createElement("div")
      total.innerHTML=`${this.getTotal()}`
      

      this.products.forEach((pro)=>{
          const productCountainer = document.createElement("div")
          
          productCountainer.innerHTML=`
          <div><h3>${pro.name} : ${pro.price}$</h3></div>`

          productsCountainer.append(productCountainer)

      })
      productsCountainer.append(total)
   
    }
  
    getUser() {
      // Implement functionality here
        function promise(){
          return promise =new Promise((resolve)=>{
                resolve(
                    fetch(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
                    .then((req)=>req.json())
                    .then((data)=>data.name
                  )
            )})
        }
    const name = promise().then((name)=>{
    nameCountaier.innerHTML=`<h2>${name}</h2>`
})
    
}


    
  }
  
  
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  const flat = new Product("flat", 5000);
  const scr = new Product("screen", 5000);

  shoppingCart.addProduct(flatscreen);
  shoppingCart.addProduct(flat);
  shoppingCart.addProduct(scr)
  scr.convertToCurrency("USD")
  flat.convertToCurrency("USD")
flatscreen.convertToCurrency("USD")

  shoppingCart.getTotal()
  shoppingCart.renderProducts()
  shoppingCart.renderProducts()

  shoppingCart.getUser()

// shoppingCart.removeProduct(flat)
//   shoppingCart.searchProduct("screen")
  




