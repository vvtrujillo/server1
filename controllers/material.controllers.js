const Material = require('../models/material.models');

module.exports.listar = (req, res) => {
    Material.find()
        .then(data => {
            res.json({data: data})            
        }).catch(error =>{
            res.status(500).json({mensaje: error})
        })
}

module.exports.buscar = (req, res) => {
    Material.findById(req.params.id)
        .then(data => {
            res.json({data: data})            
        }).catch(error =>{
            res.status(500).json({mensaje: error})
        })
}

module.exports.eliminar = (req, res) => {
    Material.findByIdAndDelete(req.params.id)
        .then(data => {
            res.json({data: data})            
        }).catch(error =>{
            res.status(500).json({mensaje: error})
        })
}

module.exports.actualizar = (req, res) => {
    Material.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            res.json({data: data})            
        }).catch(error =>{
            res.status(500).json({mensaje: error})
        })
}

module.exports.crear = (req, res) => {
    Material.create(req.body)
    .then(data => {
        res.json({data: data})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}