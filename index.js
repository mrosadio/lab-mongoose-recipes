/* -------------------------- */
/* Import data and connect DB */
/* -------------------------- */

const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');

// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });


/* -------------------------- */
/* 2. Create a recipe         */
/* -------------------------- */

Recipe.create({ title: "Bean Soup" , cuisine: "british" })
      .then(createdRecipe => console.log(createdRecipe))
      .catch(err => console.log(err))


/* -------------------------- */
/* 3. Insert multiple recipes */
/* -------------------------- */

Recipe.insertMany([
  { title: "Creme broule", cuisine: "French" },
  { title: "Pho soup"    , cuisine: "Vietnamese"}
])
.then(createdBooks => console.log(createdBooks))
.catch(err => console.log(err));


/* -------------------------- */
/* 4. Update recipe           */
/* -------------------------- */

// Recipe.findOneAndUpdate({ title: "Creme broule" }, { author: "Third author" })
//     .then(book => console.log(book))
//     .catch(err => console.log(err));

    /* Ask Marco */

/* -------------------------- */
/* 5. Remove recipe           */
/* -------------------------- */

Recipe.findOneAndDelete({ title: "Pho soup" })
    .then(deletedRecipe => console.log(deletedRecipe))
    .catch(err => console.log(err));


/* -------------------------- */
/* 6. Close the Database      */
/* -------------------------- */

mongoose.connection.close()

/* Double-check with Marco */
