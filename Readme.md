# Demo de Swagger en API REST

## Descripción
Esta es una demostración práctica de la implementación de Swagger en una API REST simple usando Node.js y Express. El proyecto muestra cómo documentar APIs de manera efectiva y proporciona una interfaz interactiva para probar los endpoints.

## Características
- Documentación automática de API con Swagger
- Interfaz interactiva para pruebas de endpoints
- CRUD básico de tareas
- Documentación detallada de schemas y endpoints

## Requisitos Previos
- Node.js (v14 o superior)
- npm (viene con Node.js)
- WebStorm o cualquier otro IDE

## Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/henmanuel/swagger.git
cd swagger
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar el servidor
```bash
npm start
```

La aplicación estará disponible en:
- API: http://localhost:3000/api
- Documentación Swagger: http://localhost:3000/api-docs

## Estructura del Proyecto
```
swagger-demo/
├── node_modules/
├── routes/
│   └── tasks.js
├── app.js
├── package.json
└── README.md
```

## Dependencias Principales
- express: Framework web para Node.js
- swagger-jsdoc: Genera especificaciones Swagger usando JSDoc
- swagger-ui-express: Interface visual para documentación Swagger

## Endpoints Disponibles

### Tareas
- GET /api/tasks - Obtiene todas las tareas
- POST /api/tasks - Crea una nueva tarea

## Uso de Swagger UI

1. Accede a la documentación
    - Abre tu navegador y visita http://localhost:3000/api-docs

2. Explorar endpoints
    - Navega por la lista de endpoints disponibles
    - Revisa los schemas y modelos de datos
    - Lee las descripciones y parámetros requeridos

3. Probar endpoints
    - Haz clic en cualquier endpoint para expandirlo
    - Presiona "Try it out"
    - Completa los parámetros requeridos
    - Ejecuta la petición y observa la respuesta

## Desarrollo

Para iniciar el servidor en modo desarrollo con recarga automática:
```bash
npm run dev
```

### Agregar Nuevos Endpoints

1. Crear la ruta en `routes/tasks.js`
```javascript
router.get('/tasks/:id', (req, res) => {
    // Lógica del endpoint
});
```

2. Documentar usando anotaciones Swagger
```javascript
/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Obtiene una tarea por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 */
```

## Pruebas
Para probar los endpoints puedes usar:
- Swagger UI (recomendado para la demo)
- Postman
- cURL

Ejemplos de peticiones:

### Obtener todas las tareas
```bash
curl http://localhost:3000/api/tasks
```

### Crear una nueva tarea
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Nueva tarea"}'
```

## Contribuir
1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## Solución de Problemas

### Problemas Comunes

1. Error: EADDRINUSE
```bash
# El puerto 3000 está en uso
# Solución: Cambia el puerto en app.js o termina el proceso que lo usa
```

2. Swagger no muestra los endpoints
```bash
# Verifica que la ruta en swaggerOptions.apis sea correcta
# Asegúrate de que las anotaciones JSDoc sean válidas
```

## Recursos Adicionales
- [Documentación de Swagger](https://swagger.io/docs/)
- [Express.js Docs](https://expressjs.com/)
- [OpenAPI Specification](https://swagger.io/specification/)

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto
Tu Nombre - [henmanuelvargas@gmail.com](henmanuelvargas@gmail.com)
Link del Proyecto: [https://github.com/henmanuel/swagger.git](https://github.com/henmanuel/swagger.git)

¿Necesitas más detalles sobre alguna sección específica del README?
