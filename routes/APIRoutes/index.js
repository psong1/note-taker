const router = require('express').Router();
const notesRoutes = require('./routes');

router.use(notesRoutes);

module.exports = router;
