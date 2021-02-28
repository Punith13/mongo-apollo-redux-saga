const router = require('express').Router()
const controller = require('./controller')

router.post('/city', controller.addCity)

module.exports = router
