module.exports={
    getHandles: function(req, res) {
        const { handle } = req.body.data;
        const dbInstance = req.app.get('db');
        
        dbInstance.get_handles([handle])
        .then( handles => res.status(200).send( handles ))
        .then( console.log('handles returned to frontend'))
        .catch( err => res.status(500).send(`big'ol error @ Twitter_controller.getHandles`, err));
    },
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.create_product()
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
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