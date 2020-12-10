import mongoose from 'mongoose';
const { Schema } = mongoose,
      experienceSchema = require('../schemas/experience-schema');

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;