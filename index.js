const express = require('express');
const app = express();

app.get('/api/tasks', (req, res) => {
    res.json([
        { id: 1, title: "Completar presentación", completed: false },
        { id: 2, title: "Preparar demo", completed: true }
    ]);
});
