const router = require('express').Router()


//NEW route for views/places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET views/places/index (an array to return objects of data to
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
        pic: '/images/la-santa.jpg'
      }]
      
    res.render('places/index', { places })
})

module.exports = router
