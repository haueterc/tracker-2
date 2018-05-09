module.exports={
    getHandles: function(req, res) {
        const { handle } = req.body.data;
        const dbInstance = req.app.get('db');
        
        console.log('Handles_controller.get_handles');
        dbInstance.get_handles([handle])
        .then( handles => res.status(200).send( handles ))
        .then( console.log('Handles_controller.get_handles>'))
        .catch( err => res.status(500).send(`'Handles_controller.get_handles'>`, err));
    }
}