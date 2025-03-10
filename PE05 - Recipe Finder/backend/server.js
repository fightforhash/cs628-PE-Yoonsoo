require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const recipesRouter = require('./routes/recipes');

const app = express();
const port = process.env.PORT || 5050;

app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse JSON request bodies

const uri = process.env.MONGO_URI;
if (!uri) {
  console.error("Missing MONGO_URI");
  process.exit(1);
}

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectDB() { // MongoDB connection check
  try {
    await client.connect();
    app.locals.recipesCollection = client.db(process.env.DB_NAME || 'recipeDB').collection('recipes');
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  }
}

connectDB();

app.use('/recipes', recipesRouter); // Route for handling recipes

app.get('/', (req, res) => res.send("Welcome to Recipe Finder API"));

app.listen(port, () => console.log(`Server running on port ${port}`));
