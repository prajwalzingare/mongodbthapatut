const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/prajwal", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("sucess");
  })
  .catch((err) => {
    console.log(err);
  });

//schema
//A mongoose schema defines the structured of the document,
//default values,validators,etc.
const playlistSchema = new mongoose.Schema({
  name: String,
  ctype: String,
  videos: Number,
});
const itemsSchema = {
  name: String,
};
const prajSchema = {
  name: String,
};
//A mongoose model is a warpper on the mongoose schema.
//A Mongoose schema defines the structure of the document.
//models ko create karna matlab collections create karna or collection ke without database dikhega nahi
//apne app singular name ko plular me convert karta hai mongoose.
//collection creation.
const Playlist = new mongoose.model("Playlist", playlistSchema);
// const Item = mongoose.model("Item", itemsSchema);
// const Praj = mongoose.model("Praj", prajSchema);

//create and insert document
// const item1 = new Item({
//   name: "Welcome to your todolist!",
// });
// const item2 = new Item({
//   name: " to your todolist!",
// });
// const praj1 = new Praj({
//   name: " to your Praj!",
// });

const createdocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "React",
      ctype: "prajwal",
      videos: 40,
    });
    const jsPlaylist = new Playlist({
      name: "javascript",
      ctype: "frontend",
      videos: 50,
    });
    const mPlaylist = new Playlist({
      name: "javascript",
      ctype: "frontend",
      videos: 50,
    });
    const result = await Playlist.insertMany([
      reactPlaylist,
      jsPlaylist,
      mPlaylist,
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// createdocument();
const getDocument = async () => {
  //comparison operator
  const result = await Playlist.find({ videos: { $in: 50 } }).select({
    name: 1,
  });
  console.log(result);
};
getDocument();
//how to save model or document.
// item1.save(function (err, item1) {
//   if (err) return console.error(err);
//   console.log(item1.name + " saved to bookstore collection.");
// });
// item2.save();
// praj1.save();
