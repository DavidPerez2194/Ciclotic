const express = require('express');
const { getBicicletas, getBicicleta, saveBicicleta, updateBicicleta, deleteBicicleta } = require('../controllers/bicicletas')
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        getBicicletas(res);
    })
    .post((req, res) => {
        const { body: data } = req
        saveBicicleta(data, res);
    })

router
    .route('/:id')
    .get((req, res) => {
        const { id } = req.params
        getBicicleta(id, res);
    })
    .put((req, res) => {
        const { body: data, params } = req
        updateBicicleta(params.id, data, res);
    })
    .delete((req, res) => {
        const { id } = req.params
        deleteBicicleta(id, res);
    })

module.exports = router;