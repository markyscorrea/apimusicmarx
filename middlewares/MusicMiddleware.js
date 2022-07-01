const Music = require('../models/Music')

module.exports = {
    async ValidadeMusic(req, res, next){
        if(!req.params.id){
            res.send(400).json({ error: "Não existe cadastro para essa ID" })
        }
        try{
            const music = await Music.findById(req.params.id)
            res.music = music
        }catch(err){
            console.log(err)
            res.send(400).json({ error: "Não existe cadastro para essa ID" })
        }

        next();
    }
}