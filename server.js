const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

app.get("/", function (req, res) {
  res.send("Welcome to my Hotel");
});

// app.get("/chicken", (req, res) => {
//   res.send("Sure Sir,I would love to serce chicken");
// });

// app.get("/idli", (req, res) => {
//   var customize_idli = {
//     name: "Rava Idli",
//     size: "18 cm diameter",
//     is_sambar: false,
//     is_chatni: true,
//   };
//   res.send(customize_idli);
// });

// app.post('/items',(req,res)=>{
//   res.send
// })

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; //Assuming the request body contains the person data

//     // Create a new Person dcoument using the Mongoose model

//     const newPerson = new Person(data);

//     // Save the new person to the database
//     const savedPerson = await newPerson.save();

//     console.log("data saved ");
//     res.status(200).json(savedPerson);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// Import the router files

const personRoutes = require("./routes/PersonRoutes");

const menuRouters = require("./routes/menuRoutes");

// use person routers
app.use("/person", personRoutes);

app.use("/menu", menuRouters);

// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on Port 3000 ");
});

// Aaruniannu9520
// arundhatikaintura333@gmail
