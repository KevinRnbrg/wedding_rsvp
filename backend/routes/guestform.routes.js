const express = require('express')
const router = express.Router()
const bodyController = require('../controllers/guestform.controller')

router.post('/saveinfo', guestFormController.saveinfo)
router.get('/getinfo', guestFormController.getinfo)

module.exports = router