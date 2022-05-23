const router = require('express').Router()

// GET /places (an array to return objects of data to
  //represent restaurants)
router.get('/', (req, res) => {
    let places = [{
        name: 'Budacai',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/budacai.jpg'
      }, {
        name: 'La Santa',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'Mexican',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', { places })
})

module.exports = router
