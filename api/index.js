const router = require('express').Router(); 
const booking = require('./booking/booking')
const auth = require('./authentication/auth')
const verifyToken = require('./authentication/verifyToken')
const cab = require('./cab/cab')
const contact = require('./contact/contact')

router.use('/contact',contact)
router.use('/auth',auth)
router.use('/booking',verifyToken,booking)
router.use('/cab',verifyToken,cab)


module.exports = router;