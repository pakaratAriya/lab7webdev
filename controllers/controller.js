const model = require('../models/artist')

exports.getHome = (req,res,next) => {
    res.render("index")
}

exports.getAll = (req,res,next) => {
    model.getAllArtist().then(([rows, fieldData])=>{
        //res.render("index",{data:rows})
        res.json(JSON.stringify(rows))
    })
}

exports.renderPage = (req,res,next) =>{
    res.render('index')
}

exports.login = (req,res,next) => {
    res.render("login",{login:true})
}

exports.addArtist = (req,res,next) => {
    console.log(req.body)
    model.addArtist(req.body).then(([rows, fieldData])=>{
        res.json(JSON.stringify(rows))
    })
    
}

exports.deleteArtist = async (req,res,next) =>{
    model.deleteArtist(Number(req.params.artistId)).then(([rows,data])=>{
        res.json(JSON.stringify(rows))
    })
}

exports.searchArtist = async (req,res,next) =>{
    model.search(req.params.searchingTxt).then(([rows, fieldData])=>{
        res.json(JSON.stringify(rows))
    })
}