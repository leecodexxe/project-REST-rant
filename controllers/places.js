const router = require('express').Router()
const Place = require('../models')
const places = require('../models/places')

//place home page
router.get('/', (req, res) => {
  places.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      res.render('error404')
    })
})

//new
router.post('/', (req, res) => {
  if (req.body.pic === ''){
    req.body.pic = undefined
  }
   if (req.body.city === ''){
    req.body.city = undefined
  }
   if (req.body.state === ''){
    req.body.state = undefined
  }
  places.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})




router.get('/:id', (req, res) => {
  places.findById(req.params.id)
    .then(place => {
      res.render('places/show', { data:place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})



router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id], id })
  }
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    // Dig into req.body and make sure data is valid
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }

    // Save the new data into places[id]
    places[id] = req.body
    res.redirect(`/places/${id}`)
  }
})




router.delete('/:id', (req, res) => {
  places.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.status(303).redirect('/places')
  })
})

module.exports = router
