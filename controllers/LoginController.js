const model = require('../models/artist')

exports.loginPage = (req,res,next) =>{
    res.render('login',{login:true})
}

exports.login = (req,res,next) =>{
    const {username, password} = req.body
    if(model.auth(username,password)==200){
        res.redirect('/renderPage')
    }else{
        res.render('login',{login:true,wrong:true})
    }
}

exports.logout = (req,res,next) =>{
    res.redirect('/')
}