const AnimeAPI = require("../models/api/Anime")

module.exports = {
    getAnimeResults: async (req,res)=>{
        console.log('apple')
        res.render('animeSearch.ejs')
    },
    getAnimeSearchResults: async (req, res) => {
        console.log('banana')
        let show = req.params.name;
    },
}