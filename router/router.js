const express = require('express');
const router = express.Router();
const MusicController = require('../controllers/MusicController')
const MusicMiddleware = require('../middlewares/MusicMiddleware')

router.get('/', MusicController.getMusics)
router.get('/music/:id', MusicMiddleware.ValidadeMusic, MusicController.getMusicById)
router.post('/music/save', MusicController.saveMusic)
router.put('/music/:id', MusicMiddleware.ValidadeMusic, MusicController.updateMusic)
router.delete('/music/:id', MusicMiddleware.ValidadeMusic, MusicController.deleteMusic)

module.exports = router;