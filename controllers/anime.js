const animeAPI = require('../api/Anime')

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
}