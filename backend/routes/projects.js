// backend/routes/projects.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects - retrieve all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().exec();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// POST /api/projects - add a new project
router.post('/', async (req, res) => {
  const { title, description, link, image } = req.body;
  try {
    const newProject = new Project({ title, description, link, image });
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create project' });
  }
});

// (Optional) PUT /api/projects/:id - update an existing project
router.put('/:id', async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Project not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update project' });
  }
});

// (Optional) DELETE /api/projects/:id - delete a project
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

module.exports = router;
