const { Router } = require('express');
const readTypes = require('../controllers/readTypes');

const router = Router();

//creo las rutas

router.get('/',readTypes);
//router.get('/:id', typeController.getById);


module.exports = router;