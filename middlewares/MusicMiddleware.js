const Music = require('../models/Music')

module.exports = {
    async ValidadeMusic(req, res, next) {

        const id = req.params.id;

        if (!id) {
            res.sendStatus(400).json({ error: "Não existe cadastro para essa ID" })
        }

        if (id.length != 24) {
            res.sendStatus(400).json({ error: "A ID informada é incorreta" })
        }

        try {
            const music = await Music.findById(req.params.id);
            
            res.music = music
        } catch (err) {
            res.sendStatus(400).json({ error: "Não existe cadastro para essa ID" })
        }

        next();
    }
}