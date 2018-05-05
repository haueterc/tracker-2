require('dotenv').config();
const bodyParser = require('body-parser')
    , axios = require('axios')

const { 
    YOUR_ACCOUNT, 
    YOUR_NON_INTERACTIVE_CLIENT_ID, 
    YOUR_NON_INTERACTIVE_CLIENT_SECRET,
    YOUR_ACCESS_TOKEN,
    USER_ID
} = process.env;

module.exports={
    getAuth0Token: function(req, res, next) {
        axios({
            method: 'POST',
            url: `https://${YOUR_ACCOUNT}.auth0.com/oauth/token`,
            headers: { 'Content-Type': 'application/json' },
            body: {"client_id":"QxF49iTSHpkw7La1wubCPOWWaUXOYnEj","client_secret":"PnS9cFpwLe-N2ALS-ecGAJ2SgYTKUoDzrnISfRJrzHosG9-FkZI0BgDWVvjcc5JW","audience":"https://chandler1.auth0.com/api/v2/","grant_type":"client_credentials"}
        }).then( function( response ) {
            console.log('response', response)
        }).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
    },
    getAuth0Profile: function(req, res, next) {
       console.log('aa.getAuthProfile needs to get finished')
        }
    }