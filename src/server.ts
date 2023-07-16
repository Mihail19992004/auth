import express from 'express'
import authRouter from "./authrRouter/auth";
import bodyParser from 'body-parser'
import OAuthServer from 'express-oauth-server'

const app = express()

// app.oauth = new OAuthServer({
//     model: {}, // See https://github.com/oauthjs/node-oauth2-server for specification
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(authRouter)

app.get('/protected', (req, res) => {
    console.log('protected')
    res.send('ss')
})

app.get('/all', (req, res) => {
    console.log('all')
    res.send('all')
})

app.listen(5000, () => {
    console.log('run')
})