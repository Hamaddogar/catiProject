let express = require("express")
let server = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let config = require('../db/configUser')
const LoginSceema = require('../models/loginSceema')


server.use(cors())

server.use(bodyParser.urlencoded({ extended: true }))

// // parse application/json
server.use(bodyParser.json())



server.post('/login', (req, res) => {
    let loginuser = new LoginSceema({ email: req.body.email, password: req.body.password })
    loginuser.save((err, user) => {
        if (err) {
            return res.json({ sucess: false, err: err })

        }
        res.json({ succes: true, data: user })
    })
})


server.get('/', (req, res) => {
    res.send('Hello World')
})





server.listen(4000, () => { console.log("server is Runnning ") })








