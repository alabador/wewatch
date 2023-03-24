const Anime = require("../models/db/Anime")

module.exports = {
    getHome: async (req,res)=>{
        try{
            const shows = await Anime.find()
            res.render('home.ejs', {shows: shows})
        } catch(error){
            console.log(error)
        }
    },
    deleteShow: async (req, res) => {
        try {
            // console.log('this works for now')
            await Anime.findOneAndDelete({
                id: req.body.showId,
            })
            console.log('Show has been deleted.')
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}