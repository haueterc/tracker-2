var request = require("request");

var options = { method: 'POST',
  url: 'https://chandler1.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"QxF49iTSHpkw7La1wubCPOWWaUXOYnEj","client_secret":"PnS9cFpwLe-N2ALS-ecGAJ2SgYTKUoDzrnISfRJrzHosG9-FkZI0BgDWVvjcc5JW","audience":"https://chandler1.auth0.com/api/v2/","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

// module.exports = {
//     read: (req, res) => {
//         const { handle } = req.body.data;
//         req.app.get('db').find_handle([handle])
//         .then( results => res.status(200).send(results))
    
//     }
// }

// app.post(`/search`, hc.read);