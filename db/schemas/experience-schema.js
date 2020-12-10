import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const experienceSchema = new Schema({
  title:  String,
  description: String,
  imageSrc:   String
});

model.exports = experienceSchema;