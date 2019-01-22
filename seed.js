const {db, Plot, Gardener, Vegetable} = require('./models')


db.sync({force: true})
   .then(function(){
      console.log('ok')
   })
   .catch(function(err){
      console.error(err)
   })
   .finally(() => {
      db.close()
   })

