const { Router } = require('express');
const pokemonRoutes = require("./pokemons")
const typeRoutes = require("./types")

// Importar todos los Routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemon", pokemonRoutes)
router.use("/type", typeRoutes)



module.exports = router;
