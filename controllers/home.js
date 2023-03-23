const Anime = require("../models/db/Anime")

module.exports = {
    getHome: async (req,res)=>{
        const shows = await Anime.find()
        res.render('home.ejs', {shows: shows})
    }
}