require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')

const app = express();
const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING

} = process.env;

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
})
//-- serve up static files from npm run build
// app.use(express.static(__dirname + './../build'))
//---
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Auth0Strategy({
// passport identification
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
// db calls
    const db = app.get('db');
    // massive wants arguments passed in as an array
    const { id, displayName, picture } = profile;
    console.log(profile);
    db.find_user([id]).then( users => {
        // check to see if the array has an item because an empty array could be returned
        if (users[0]) {
            return done(null, users[0].id)
        } else {
            db.create_user([displayName, picture, id])
            .then( createdUser => {
                return done(null, createdUser[0].id)
            })
        }
    } )
})) 

passport.serializeUser( (id, done) => {
    // puts info in the session store
    return done(null, id)
})

passport.deserializeUser( (id, done) => {
    // retrieves info from the session store
    // supposed to put info on req.user
    // fires before anything else like componentdidmount
    app.get('db').find_session_user([id]).then( user => {
        done(null, user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    // to a specific page successRedirect: 'http://localhost:3000/#/somepage'
    // change the port after npm run build to point to the backend server
    successRedirect: 'http://localhost:3000/#/private',
    failureRedirect: 'http://localhost:3000'
}))
app.get('/auth/me', function(req, res) {
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send('Nice try sucka')
    }
})

app.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('http://localhost:3000')
})


app.listen(SERVER_PORT, () => {
    console.log(`Listening on Port: ${SERVER_PORT}`)
});