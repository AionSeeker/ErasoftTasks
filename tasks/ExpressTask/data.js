//those are the DataBases
//you may see short names bec i will store data manually usually the first litter with the last one without including any extras like s in products,
//the shortcut name will be capital for example productsName will be PTname
//if you didn't see any kind of that shit that's fine just in case you did  

// quantity is the available stock; price is the price of one unit.
let products = [
  {
    "productName": "laptop",
    "id": 1,
    "price": 200,
    "quantity": 20,
  },
  {
    "productName": "mouse",
    "id": 2,
    "price": 100,
    "quantity": 30,
  },
  {
    "productName": "charger",
    "id": 3,
    "price": 150,
    "quantity": 50,
  },
  {
    "productName": "keyboard",
    "id": 4,
    "price": 100,
    "quantity": 20,
  },
]


let users = [
  {
    userName: "ahmmed",
    id: 1,
    email: "ahmmed@gmail.com",
    password: "ahmmed123",
  },
  {
    userName: "ammar",
    id: 2,
    email: "ammar@gmail.com",
    password: "ammar123",
  },
  {
    userName: "yahia",
    id: 3,
    email: "yahia@gmail.com",
    password: "yahia123",
  },
]
// Each entry is one product in a user's cart.
// userId refers to users.id; productId refers to products.id.
// Keep one entry per userId/productId pair and update its quantity.
let carts = [
  {
    id: 1,
    productId: 3,
    userId: 2,
    quantity: 4,
  },
  {
    id: 2,
    productId: 2,
    userId: 1,
    quantity: 3,
  },
  {
    id: 3,
    productId: 4,
    userId: 3,
    quantity: 2,
  },
]

// Orders start empty and are added when a user places an order (no payment).
let orders = []


module.exports = {
  products,
  users,
  carts,
  orders
};
