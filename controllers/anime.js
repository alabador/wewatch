module.exports = {
    getAnimeResults: (req,res)=>{
        console.log('apple')
        res.render('animeSearch.ejs')
    },
    getAnimeSearchResults: async (req, res) => {
        console.log('banana')
        let show = req.params.name;
        res.send(`Anime ${show}`);
    },
}