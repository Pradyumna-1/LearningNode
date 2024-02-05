const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");
// Post Methods to add a Menu Item

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET method to get the Menu Items

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(500).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


// PUT operation to change the or update the data

router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id; //Extract the id from the URL parameter
    const updatedmenuData = req.body; //Update data for the menu

    const response = await MenuItem.findByIdAndUpdate(
      menuId,
      updatedmenuData,
      {
        new: true, //Return the updated document
        runValidators: true, //Run Mongoose Validatiion
      }
    );

    if (!response) {
      return res.status(404).json({ error: " MenuItem not fount" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal  Server Error" });
  }
});





router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id; //Extract the person's ID from the URL parameter

    //Assuming you have a MenuItem model

    const response = await MenuItem.findByIdAndDelete(menuId);
    if (!response) {
      return res.status(404).json({ error: " Person not fount" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "MenuItem deleted successfully" });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
