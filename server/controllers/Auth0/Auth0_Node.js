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

var AuthenticationClient = require('auth0').AuthenticationClient;

var auth0 = new AuthenticationClient({
  domain: `${YOUR_ACCOUNT}.auth0.com`,
  clientId: `${YOUR_NON_INTERACTIVE_CLIENT_ID}`,
  clientSecret: `${YOUR_NON_INTERACTIVE_CLIENT_SECRET}`
});

auth0.clientCredentialsGrant(
  {
    audience: `https://${YOUR_ACCOUNT}.auth0.com/api/v2/`,
    scope: `${MANAGEMENT_API_SCOPES}`
  },
  function(err, response) {
    if (err) {
      console.log(err)
    }
    console.log(response.access_token);
  }
);