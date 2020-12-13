const mongoose = require('mongoose'),
      ObjectId = mongoose.Types.ObjectId,
      Schema = mongoose.Schema;

const experienceSchema = new Schema({
  title: String,
  description: String,
  imageSrc: String,
  experienceID: ObjectId
});

module.exports = experienceSchema;