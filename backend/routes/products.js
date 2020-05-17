const router = require('express').Router();
const ProductController = require('../controllers/ProductController');
const { authentication, is } = require('../middleware/authentication')
router.get('/', ProductController.getAll);
router.get('/:_id', ProductController.getById);
router.get('/brand/:brand', ProductController.getBrand); 
router.get('/date/productsnews', ProductController.getProdutsDateNews);
router.post('/', authentication, is(['seller']), ProductController.insert);

module.exports = router