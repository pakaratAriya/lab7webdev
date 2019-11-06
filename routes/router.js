const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const controller = require('../controllers/controller')
const loginController = require('../controllers/LoginController')
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get('/',loginController.loginPage)
router.post('/login',loginController.login)
router.get('/getAll',controller.getAll)
router.post('/addArtist',controller.addArtist)
router.delete('/deleteArtist/:artistId',controller.deleteArtist)
router.post('/searchArtist/:searchingTxt',controller.searchArtist)
router.get('/renderPage',controller.renderPage)

module.exports = router