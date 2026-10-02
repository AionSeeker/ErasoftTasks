//this is the CRUD oprations for products
const express = require("express");
const router = express.Router();
const { products } = require("../data");

//Read 
router.get("/", (req, res) => {
  res.json(products);
})

//Creat
router.post("/addProduct", (req, res) => {
  const { productName, price, quantity } = req.body //rquisting the info for the new product
  // this is the new product and for the id i will add one from the last product to the new one like if the last one is 5 the new product will be 5+1 wich is 6
  const newProduct = {
    id: products.length + 1,
    productName,
    price,
    quantity,
  }
  //then i will just push it to the array
  products.push(newProduct);
  res.send("product added") //a respond at the end so it won't load for ever
})

//update
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);// the route will be the id 
  const { productName, price, quantity } = req.body // requisting the update info there is bug here actully but i will keep it for now
  //finding the product with the id using .find
  const product = products.find(product => product.id === id);
  //cheking if the product exist 
  if (!product) {
    return res.send("product not found")
  }
  //updting each product vlaues with the requisted one as i said there is bugs here but i won't solve it bec idk how 
  product.productName = productName
  product.price = price
  product.quantity = quantity

  res.json(product)
})
//delete
router.delete("/:id", (req, res) => {
  //this part is the same as the update the deffrince is am looking for the index not the item in the array
  const id = Number(req.params.id);
  const index = products.findIndex(product => product.id === id);
  // cheking if there a product with those values or not if not index will be -1 so it will return product not found
  if (index === -1) {
    return res.send("product not found")
  }
  //deleting the item with splice start from the index and delete only one item
  products.splice(index, 1);
  res.json(products)
})


module.exports = router;
