const express = require('express');
const router = express.Router();

let tasks = [
    { id: 1, title: "Preparar presentación", completed: false },
    { id: 2, title: "Hacer demo", completed: true }
];

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-generado de la tarea
 *         title:
 *           type: string
 *           description: Título de la tarea
 *         completed:
 *           type: boolean
 *           description: Estado de la tarea
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtiene todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get('/tasks', (req, res) => {
    res.json(tasks);
});

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 */
router.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

module.exports = router;
