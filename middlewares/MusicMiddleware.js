const Music = require('../models/Music')

module.exports = {
    async ValidadeMusic(req, res, next){
        try{
            const music = await Music.findById(req.params.id)
            res.music = music
        }catch(err){
            console.log(err)
            res.send(404).json({ error: "Não existe cadastro para essa ID" })
        }

        next();
    }
}