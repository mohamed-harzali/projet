const router = require ('express').Router()
const userCtrl = require ('../controllers/userCtrl')
const {validationCheck} = require ('../middlewares/dataCheck')
const auth = require ("../middlewares/auth")

router.post('/register' ,validationCheck, userCtrl.register)
router.post('/login' , userCtrl.login)
router.get('/userProfile', auth , userCtrl.getUserInfo)

module.exports = router