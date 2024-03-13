// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000;

// Define a sample data object
let data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bala Chilla', age: 45 }
];

// Middleware to parse JSON request bodies
app.use(express.json());

// Define REST endpoints
// GET request to retrieve all data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// GET request to retrieve data by ID
app.get('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find(item => item.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// POST request to add new data
app.post('/api/data', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).send('Item added successfully');
});

// PUT request to update existing data by ID
app.put('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data[index] = updatedItem;
        res.send('Item updated successfully');
    } else {
        res.status(404).send('Item not found');
    }
});

// DELETE request to delete data by ID
app.delete('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    data = data.filter(item => item.id !== id);
    res.send('Item deleted successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
