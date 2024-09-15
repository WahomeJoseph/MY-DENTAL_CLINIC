const express = require('express');
const app = express();

app.post('/api/appointments', async (req, res) => {
  const { firstName, lastName, email, ...otherData } = req.body; // Destructure data from request body

  try {
    const [results] = await pool.query('INSERT INTO appointments (first_name, last_name, email, ...) VALUES (?, ?, ?, ...)', [firstName, lastName, email, ...Object.values(otherData)]);

    res.json({ message: 'Appointment added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding appointment' });
  }
});
