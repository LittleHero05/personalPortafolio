// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
const uri = 'mongodb+srv://isaporras1122:d4TNgYLgPjtG1wef@cluster0.vtjca.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const contactRoutes = require('./backend/routes/contactRoutes');
const userRoutes = require('./backend/routes/userRoutes');

app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Isabella Porras\' Portfolio Backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});