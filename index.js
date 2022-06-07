const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/checkpointApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("oh no! error!!");
    console.log(err);
  });

// Create a person with this prototype:
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favoriteFood: {
    type: [String],
  },
});

const Person = mongoose.model("Person", personSchema);

// Create and Save a Record of a Model:

// const nobleman = new Person({
//   name: "Nobleman",
//   age: 24,
//   favoriteFood: ["Yam", "Rice", "Beans"],
// });

// nobleman
//   .save()
//   .then((data) => {
//     console.log("it worked");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error");
//     console.log(err);
//   });

// //Create Many Records with model.create()

// Person.create([
//   { name: "Prince", age: 26, favoriteFood: ["Egusi", "Rice", "Plantain"] },
//   { name: "Blossom", age: 22, favoriteFood: ["Egg", "Cheese", "Bread"] },
//   { name: "Elvis", age: 14, favoriteFood: ["Hotdog", "Milk", "Pasta"] },
//   { name: "Eunice", age: 16, favoriteFood: ["Soup", "Potato", "Burger"] },
//   {
//     name: "Godwin",
//     age: 50,
//     favoriteFood: ["Goat meat", "PepperSoup", "Semolina"],
//   },
// ])
//   .then((data) => {
//     console.log("it worked");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error");
//     console.log(err);
//   });

// Use model.find() to Search Your Database
// Person.find({})
//   .then((data) => {
//     console.log("found");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("not found");
//     console.log(err);
//   });

//Use model.findOne() to Return a Single Matching Document from Your Database
// Person.findOne({ favoriteFood: "Egusi" })
//   .then((data) => {
//     console.log("foundOne");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("not foundOne");
//     console.log(err);
//   });

//Use model.findById() to Search Your Database By _id
// Person.findById("629f1f3c1c71f8f2a236bba3")
//   .then((data) => {
//     console.log("foundById");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("not foundById");
//     console.log(err);
//   });

// Perform Classic Updates by Running Find, Edit, then Save

// Person.findOneAndUpdate(
//   { _id: "629f1f3c1c71f8f2a236bba4" },
//   { $push: { favoriteFood: "Hamburgers" },{new: true} }
// )
//   .then((data) => {
//     console.log("food added");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("food not added");
//     console.log(err);
//   });

// Perform New Updates on a Document Using model.findOneAndUpdate()
// Person.findOneAndUpdate(
//   { name: "Godwin" },
//   { age: 20 }, {new: true},
// )
//   .then((data) => {
//     console.log("Age Changed");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(" Age not changed");
//     console.log(err);
//   });

// Delete One Document Using model.findByIdAndRemove
// Person.findByIdAndRemove({ _id: "629f1f3c1c71f8f2a236bba6"})
//   .then((data) => {
//     console.log(" Person Removed");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(" Person Not Removed");
//     console.log(err);
//   });

//MongoDB and Mongoose - Delete Many Documents with model.remove()
// Person.remove({ name: 'Godwin'})
//   .then((data) => {
//     console.log(" Person Removed");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(" Person Not Removed");
//     console.log(err);
//   });

// Chain Search Query Helpers to Narrow Search Results
Person.find({ favoriteFood: "Rice" })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: false })
  .exec()
  .then((data) => {
    console.log(" ALl Done");
    console.log(data);
  })
  .catch((err) => {
    console.log(" Not Done");
    console.log(err);
  });
