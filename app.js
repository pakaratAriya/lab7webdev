const express = require('express');
const app = express();
const path = require('path')
const expressHbs = require('express-handlebars')
const dotenv = require('dotenv')
dotenv.config();
app.use(express.static(path.join(__dirname,"public")))
app.engine(
    'hbs',
    expressHbs({
        layoutsDir: 'views/layouts/',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
)
app.set('view engine','hbs')
app.set('views','views')
const router = require('./routes/router')
app.use(router);

app.listen(process.env.PORT,process.env.IP,()=>{
    console.log("SERVER HAS STARTED")
})