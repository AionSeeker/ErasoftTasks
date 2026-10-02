const express = require("express");
const router = express.Router();
const { users } = require("../data");

//for the signup i will check if there any email used if not it will push the reqiseted body 
router.post("/signup", (req, res) => {
  const { userName, email, password } = req.body //reqisting info for the new user
  const existingUser = users.find(user => user.email === email)//checks if the email exist using .find
  //so if true return 
  if (existingUser) {
    return res.send("user exist")
  }
  // i will add the same info as the reqiseted info has exept the id will add one from the last id same as the products has go ckeck it first if you did not if you want more details
  const newUser = {
    id: users.length + 1,
    userName,
    email,
    password
  };
  //pushing the new user to the array
  users.push(newUser);
  res.send("signup successful");
})

//same logic tho i won't explain it again 
router.post("/login", (req, res) => {
  const { email, password } = req.body
  const validUser = users.find(
    user => user.email === email && user.password === password
  );
  if (validUser) {
    res.send("welcome")
  } else {
    res.send("worng email or passowrd")
  }
})

module.exports = router;


