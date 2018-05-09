let axios = require('axios')
  , qs = require('qs')

module.exports={
    getTweet: function(req, res, next) {
      console.log('index/tc.getTweet>', req.user);
      let { access_token, access_token_secret } = req.user;
      var url = 'https://api.twitter.com/1.1/users/show.json?' + qs.stringify(access_token, access_token_secret);
      axios.get(url)
      .then( tweet => {
        console.log(tweet);
        res.status(200).send(tweet)})
      .catch( ()=> res.status(500).send());
      },
  
    getOne: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_product()
        .then( product => res.status(200).send( product ) )
        .catch( () => res.status(500).send() );
    },
  
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_products()
        .then( products => res.status(200).send( products ) )
        .catch( () => res.status(500).send() );
    },
  
    update: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.update_product()
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.delete_product()
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
  };