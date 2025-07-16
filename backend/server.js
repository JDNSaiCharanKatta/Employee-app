const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/Employee');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/employees', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

app.post('/api/employees', async (req, res) => {
  const { name, email, position } = req.body;
  const newEmp = new Employee({ name, email, position });
  await newEmp.save();
  res.status(201).json({ message: 'Employee added' });
});

app.get('/', (req, res) => res.send('Backend Running'));

app.listen(5000, () => console.log('Server running on port 5000'));

