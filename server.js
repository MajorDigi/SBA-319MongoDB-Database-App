const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const grades = require("./Routes/grades");


const app = express();
const port = process.env.PORT || 3000;

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);

// Middleware to parse JSON requests
app.use(express.json());
app.use("/api/grades",grades)

// // Connect to MongoDB
// async function connectToDatabase() {
//   await client.connect();
//   console.log('Connected to MongoDB');
//   return client.db(process.env.DB_NAME);
// }

// // API route to fetch data
// app.get('/api/data', async (req, res) => {
//   try {
//     const db = await connectToDatabase();
//     const collection = db.collection(process.env.COLLECTION_NAME)
//     console.log(collection);
//     const documents = await collection.find({}).limit(5).toArray();
//     console.log(documents);
//     res.json(documents);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching data', error });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

