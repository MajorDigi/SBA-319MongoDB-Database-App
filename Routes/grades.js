const connectToDatabase = require('../db');
const express = require("express");
const router=express.Router();
// API route to fetch data
router.get( async (req, res) => {
    try {
      const db = await connectToDatabase();
      const collection = db.collection(process.env.COLLECTION_NAME)
      console.log(collection);
      const documents = await collection.find({}).limit(5).toArray();
      console.log(documents);
      res.json(documents);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error });
    }
  });