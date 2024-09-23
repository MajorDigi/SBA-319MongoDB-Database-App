const { ObjectId } = require('mongodb');
const connectToDatabase = require('../db');
const express = require("express");
const router=express.Router();
// API route to fetch data
router.get( "/",async (req, res) => {
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

  router.get( "/:id",async (req, res) => {
    try {
      const db = await connectToDatabase();
      const collection = db.collection(process.env.COLLECTION_NAME)
      console.log(collection);
      const documents = await collection.findOne({_id:new ObjectId(req.params.id)});
      console.log(documents);
      res.json(documents);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error });
    }
  });

  router.delete("/:id",async (req, res) => {
    try {
      const db = await connectToDatabase();
      const collection = db.collection(process.env.COLLECTION_NAME)
      console.log(collection);
      const documents = await collection.deleteOne({_id: new ObjectId(req.params.id)});
      console.log(documents);
      res.json(documents);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error });
    }
  });

router.post("/", async (req,res) =>{
    try {
         if (!req.body.student_id || !req.body.class_id || !req.body.scores){throw new Error ("Inconsistent data");}
        const db = await connectToDatabase();
        const collection = db.collection(process.env.COLLECTION_NAME)
        console.log(collection);
        const documents = await collection.insertOne(req.body);
        console.log(documents);
        res.json(documents);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
      }
})

router.patch("/:id", async (req,res) =>{
    try {
        const db = await connectToDatabase();
        const collection = db.collection(process.env.COLLECTION_NAME)
        console.log(collection);
 
        const documents = await collection.updateOne({_id: new ObjectId(req.params.id)}, { $set: req.body });
        console.log(documents);
        res.json(documents);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
      }
    })
module.exports = router