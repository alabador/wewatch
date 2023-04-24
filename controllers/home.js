const Anime = require("../models/db/Anime")

module.exports = {
    getLanding: async(req, res) => {
        res.render('landing.ejs')
    },
    getHome: async (req,res)=>{
        // const shows = await Anime.find()
        const shows = await Anime.find({userId:req.user.id})
        res.render('home.ejs', {shows: shows})
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
    },
    increaseCount: async (req, res) => {
        try {
            await Anime.findOneAndUpdate({id: req.body.showId}, {
                $inc: {'episodes.watched' : 1}
            })
            console.log('Show count increased!')
            res.json('Show count increased.')
        } catch(error) {
            console.log(error)
        }
    },
    decreaseCount: async (req, res) => {
        try {
            await Anime.findOneAndUpdate({id: req.body.showId}, {
                $inc: {'episodes.watched' : -1}
            })
            console.log('Show count decreased!')
            res.json('Show count decreased.')
        } catch(error) {
            console.log(error)
        }
    },

}