const express = require("express");
const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

const port = 3000;
//The server
app.listen(port, () => {
  console.log(`listen on port ${port}`);
})

app.get("/", (req, res) => {
  res.send("HI")
})




