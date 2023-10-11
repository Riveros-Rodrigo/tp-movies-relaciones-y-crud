const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const upload = require('../middlewares/uploadFile');


router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
//Rutas exigidas para la creación del CRUD
router.get('/movies/add',moviesController.add);
router.post('/movies/create',upload.single('image'), moviesController.create);
router.get('/movies/edit/:id',upload.single('image'), moviesController.edit);
router.put('/movies/update/:id', moviesController.update);
router.delete('/movies/delete/:id', moviesController.destroy);

module.exports = router;