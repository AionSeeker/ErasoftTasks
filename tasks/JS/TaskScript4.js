const prompt = require('prompt-sync')();
class Product {
  constructor(_productName, _price, _productsQuantity) {
    this.productName = _productName
    this.price = _price
    this.productsQuantity = _productsQuantity
  }
}
let paymentSuccessful;// for boolen vlaue
let compleatPurchase; // for boolen value
class User {
  constructor(_userName, _email, _password) {
    this.userName = _userName
    this.email = _email
    this.password = _password
    this.shoppingCart = new cart()
  }
  addProductToCart(product) {
    this.shoppingCart.addProduct(product)
  }
  removeProductFromCart(product) {
    this.shoppingCart.removeProduct(product)
  }
  CompleatPurchase() {
    if (paymentSuccessful == true) {
      compleatPurchase = true;
    } else {
      compleatPurchase = false;
    }
  }

}

class payment {
  constructor(_paymentCardNumber, _paymentCardCvv, _paymentCardPassword) {
    this.paymentCardNumber = _paymentCardNumber
    this.paymentCardCvv = _paymentCardCvv
    this.paymentCardPassword = _paymentCardPassword
  }
  PaymentCheck() {
    if (this.paymentCardNumber.length === 16 && this.paymentCardCvv.length === 3) {
      console.log("payment successful")
      paymentSuccessful = true;
    } else {
      console.log("Enter valide payment card")
      paymentSuccessful = false;
    }
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
//getting input form user
const userName = prompt("Enter your userName: ")
const email = prompt("Enter your email: ")
const password = prompt("Enter your passowrd: ")
//products
const laptop = new Product("laptop", 30000, 1)
const mouse = new Product("mouse", 1000, 1)
const keyboard = new Product("keyboard", 2000, 1)
//user passowrd and email
const user = new User(`${userName}`, `${email}`, `${password}`)
//sending avalible product to the user
console.log(`our products ${laptop.productName} ${mouse.productName} ${keyboard.productName}`)

//adding products to the cart
const order = prompt('how many orders do you want: ')
const totalOrders = parseInt(order)

for (let i = 1; i <= totalOrders; i++) {
  choice = prompt("Enter your order: ")
  if (choice === laptop.productName) {
    user.addProductToCart(laptop)
  } else if (choice === mouse.productName) {
    user.addProductToCart(mouse)
  } else if (choice === keyboard.productName) {
    user.addProductToCart(keyboard)
  } else {
    return "please enter a valide name"
  }
}
//sending input to the user
console.log(user.shoppingCart.products)
console.log(`your total is ${user.shoppingCart.calculateTotal()}`)

let creditCardNumber = prompt('Enter youre card number: ')
let creditCardcvv = prompt('Enter youre card cvv: ')
const paymentCard = new payment(`${creditCardNumber}`, `${creditCardcvv}`)
paymentCard.PaymentCheck()





