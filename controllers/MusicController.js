const Music = require('../models/Music')

module.exports = {
    async getMusics(req, res){
        try{
            const musics = await Music.find()
            res.status(200).json(musics)
        }catch(err){
            console.log(err)
            res.send(400).json({ error: "Não foram encontradas músicas na base de dados." })
        }
    },

    async saveMusic(req, res){
        if(!req.body){
            res.send(400).json({ error: "Não existe cadastro para essa ID" })
        }
        const { name, links } = req.body 
        const music = new Music({
            name: name,
            links: {youtube: links.youtube, spotify: links.spotify}
        })

        try{
            await music.save()
            res.status(200).json({message: "Cadastro realizado com sucesso."})
        }catch(err){
            console.log(err)
            res.send(400).json({ error: "Não foi possível realizar o cadastro" })
        }
    },

    async getMusicById(req, res){
        try{
            const music = await Music.findById(res.music._id)
            res.status(200).json(music)
        }catch(err){
            console.log(err)
        }
    },

    async updateMusic(req, res){
        const { name, links } = req.body
        try{
            await Music.findOneAndUpdate({_id: res.music._id}, {name: name, links: links})
            res.status(200).json({message: "Música alterada com sucesso."})
        }catch(err){
            console.log(err)
            res.send(404).json({ error: "Erro na alteração dos dados." })
        }
    },

    async deleteMusic(req, res){
        try{
            await Music.deleteOne({_id: res.music._id})
            res.status(200).json({message: "Música deletada com sucesso."})
        }catch(err){
            console.log(err)
            res.send(404).json({ error: "Erro na deleção dos dados." })            
        }
    }
}