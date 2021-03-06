const express = require('express');

const routes = express.Router();

const userController = require('./controllers/UserController');
const notesController = require('./controllers/NotesController');
const sessionController = require('./controllers/SessionController');

routes.get('/user', userController.index);
routes.post('/user', userController.create);

routes.post('/sessions', sessionController.create);

routes.get('/notes', notesController.index);
routes.post('/notes', notesController.create);
routes.delete('/notes/:id', notesController.delete);

module.exports = routes;