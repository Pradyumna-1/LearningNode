const express = require("express");
const router = express.Router();

const Person = require("../models/person");
router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the person data

    const newPerson = new Person(data);
    // Save the new person to the database
    const savedPerson = await newPerson.save();

    console.log("data saved ");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET method to get person


router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(500).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      //Extrect the workType from the URL parameter

      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid worktype" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //Extract the id from the URL parameter
    const updatedPersonData = req.body; //Update data for the person

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, //Return the updated document
        runValidators: true, //Run Mongoose Validatiion
      }
    );

    if (!response) {
      return res.status(404).json({ error: " Person not fount" });
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
    const personId = req.params.id; //Extract the person's ID from the URL parameter

    //Assuming you have a Person model

    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: " Person not fount" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "Person deleted successfully" });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;








