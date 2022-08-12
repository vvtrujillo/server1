const MaterialController = require('../controllers/material.controllers');

module.exports = app => {
    app.get('/api/v1/material', MaterialController.listar);
    
    app.post('/api/v1/material', MaterialController.crear);
    
    app.put('/api/v1/material/:id', MaterialController.actualizar);
    
    app.delete('/api/v1/material/:id', MaterialController.eliminar);
}