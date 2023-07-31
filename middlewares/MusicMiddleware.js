const Music = require('../models/Music')

module.exports = {
    async ValidadeMusic(req, res, next) {

        const id = req.params.id;

        if (!id) {
            return res.sendStatus(400).json({ error: "Não existe cadastro para essa ID" })
        }

        if (id.length != 24) {
            return res.sendStatus(400).json({ error: "A ID informada é incorreta" })
        }

        try {
            const music = await Music.findById(req.params.id);

            if (music) {
                res.music = music
                return next();
            } else {
                throw new BadRequestException();
            }

            return res.sendStatus(400).json({ error: "Não existe cadastro para essa ID" });

        } catch (err) {
            return res.sendStatus(400).json({ error: "Não existe cadastro para essa ID" });
        }

    }
}