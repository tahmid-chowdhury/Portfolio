// backend/models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  link:        { type: String },           // e.g., URL to live project or repo
  image:       { type: String }            // e.g., URL or path to project image
  // you can add more fields like tags, date, etc., as needed
});

module.exports = mongoose.model('Project', ProjectSchema);
