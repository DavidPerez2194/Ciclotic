const express = require('express');
const { getPuntos, getPunto, savePunto, updatePunto, deletePunto } = require('../controllers/puntos')
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        getPuntos(res);
    })
    .post((req, res) => {
        const { body: data } = req
        savePunto(data, res);
    })

router
    .route('/:id')
    .get((req, res) => {
        const { id } = req.params
        getPunto(id, res);
    })
    .put((req, res) => {
        const { body: data, params } = req
        updatePunto(params.id, data, res);
    })
    .delete((req, res) => {
        const { id } = req.params
        deletePunto(id, res);
    })

module.exports = router;