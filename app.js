const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
app.use(express.json());

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Tareas Demo',
            version: '1.0.0',
            description: 'API simple para demostrar Swagger'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const taskRoutes = require('./routes/tasks');
app.use('/api', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
});
