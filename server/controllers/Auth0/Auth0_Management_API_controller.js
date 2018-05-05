require('dotenv').config();
const bodyParser = require('body-parser')

const { 
    YOUR_ACCOUNT, 
    YOUR_NON_INTERACTIVE_CLIENT_ID, 
    YOUR_NON_INTERACTIVE_CLIENT_SECRET,
    YOUR_ACCESS_TOKEN,
    USER_ID
} = process.env;

module.exports={
    getAuth0Token: function(req, res, next) {
        var request = require("request");
    
        var options = { 
            method: 'POST',
            url: `https://${YOUR_ACCOUNT}.auth0.com/oauth/token`,
            headers: 
                { 'Content-Type': 'application/json' },
            body: 
                {   client_id: `${YOUR_NON_INTERACTIVE_CLIENT_ID}`,
                    client_secret: `${YOUR_NON_INTERACTIVE_CLIENT_SECRET}`,
                    audience: `https://${YOUR_ACCOUNT}.auth0.com/api/v2/`,
                    grant_type: 'client_credentials' },
            json: true 
            };
        
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
          if (body) {
              console.log('------> body["access_token"]', body["access_token"])
          }
        });

        res.status(200).send('Hit-----> Auth0_Management_API_CONTROLLER!')
    },
    getAuth0Profile: function(req, res, next) {
        req.app.use(bodyParser.json());
        var request = require("request");

        var options = { 
            method: 'GET',
            url: `https://${YOUR_ACCOUNT}.auth0.com/api/v2/users/${USER_ID}`,
            headers: 
                { authorization: `Bearer ${YOUR_ACCESS_TOKEN}`}
            };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        });
    }
}