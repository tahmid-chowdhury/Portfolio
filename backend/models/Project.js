const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  link:        { type: String },           // URL to live project or repo
  image:       { type: String }            // URL or path to project image
});

module.exports = mongoose.model('Project', ProjectSchema);
