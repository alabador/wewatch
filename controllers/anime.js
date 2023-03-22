const animeAPI = require('../api/Anime');
const Anime = require('../models/db/Anime');

module.exports = {
    getAnimeResults: async (req,res)=>{
        console.log('apple')
        res.render('animeSearch.ejs')
    },
    getAnimeSearchResults: async (req, res) => {
        let show = req.params.name;
        // res.send(`Anime ${show}`)
        const apiData = await animeAPI.searchByName(show)
        res.render('animeSearch.ejs', {searchResults: apiData.data})
    },
    addToList: async (req, res) => {
        try{
            await Anime.create({
                id: req.body.showId,
                name: req.body.showName,
                imageURL: req.body.showImage,
                status: req.body.showStatus,
                episodes: {
                    total: req.body.showEpisodes,
                },
            })
            console.log('Show has been added!')
            res.redirect('/') //once you do this, the get request from the home route should trigger
        }catch(err){
            console.log(err)
        }
    },
}