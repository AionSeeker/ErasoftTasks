class Product {
  constructor(_productName, _price, _productsQuantity) {
    this.productName = _productName
    this.price = _price
    this.productsQuantity = _productsQuantity
  }
}

class User {
  constructor(_userName, _email, _paymentCard) {
    this.userName = _userName
    this.email = _email
    this.paymentCard = _paymentCard
    this.shoppingCart = new cart()
  }
  addProductToCart(product) {
    this.shoppingCart.addProduct(product)
  }
  removeProductFromCart(product) {
    this.shoppingCart.removeProduct(product)
  }
  compleatPurchase() {

  }

}

class payment {
  constructor() {

  }

}


class cart {
  constructor() {
    this.products = []
  }
  addProduct(product) {
    this.products.push(product)
  }
  removeProduct(product) {
    this.products = this.products.filter(item => item.productName !== product.productName);
  }
  calculateTotal() {
    return this.products.reduce((total, item) => total + item.price, 0);
  }

}


const laptop = new Product("Laptop", 30000, 5)
const mouse = new Product("Mouse", 1000, 20)
const user = new User("Ammar", "email@test.com", "1234")

user.addProductToCart(laptop)
user.addProductToCart(mouse)






