const express = require('express');
const { getUsers, getUser, saveUser, updateUser, deleteUser } = require('../controllers/usuarios')
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        getUsers(res);
    })
    .post((req, res) => {
        const { body: data } = req
        saveUser(data, res);
    })

router
    .route('/:id')
    .get((req, res) => {
        const { id } = req.params
        getUser(id, res);
    })
    .put((req, res) => {
        const { body: data, params } = req
        updateUser(params.id, data, res);
    })
    .delete((req, res) => {
        const { id } = req.params
        deleteUser(id, res);
    })

module.exports = router;