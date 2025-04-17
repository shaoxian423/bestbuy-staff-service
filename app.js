// Import required modules
const express = require('express');
const app = express();

// Load PORT from env or use default
const PORT = process.env.PORT || 3000;

// Enable JSON body parsing
app.use(express.json());

// In-memory data store
const staff = [];
let nextId = 1;

// === ROUTES ===

// Health check
app.get('/', (req, res) => {
  res.send('✅ Staff-Service is running');
});

// CREATE staff member
app.post('/staff', (req, res) => {
  const { name, position, department, email, phone } = req.body;

  if (!name || !position || !department || !email || !phone) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newStaff = {
    id: nextId++,
    name,
    position,
    department,
    email,
    phone
  };

  staff.push(newStaff);
  res.status(201).json(newStaff);
});

// READ all staff members
app.get('/staff', (req, res) => {
  res.json(staff);
});

// READ a single staff member by ID
app.get('/staff/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const member = staff.find(s => s.id === id);

  if (!member) {
    return res.status(404).json({ message: 'Staff not found' });
  }

  res.json(member);
});

// UPDATE a staff member
app.put('/staff/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const member = staff.find(s => s.id === id);

  if (!member) {
    return res.status(404).json({ message: 'Staff not found' });
  }

  const { name, position, department, email, phone } = req.body;

  if (name) member.name = name;
  if (position) member.position = position;
  if (department) member.department = department;
  if (email) member.email = email;
  if (phone) member.phone = phone;

  res.json(member);
});

// DELETE a staff member
app.delete('/staff/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = staff.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Staff not found' });
  }

  const deleted = staff.splice(index, 1);
  res.json(deleted[0]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Staff-Service running on http://localhost:${PORT}`);
});