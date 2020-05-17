const Product = require('../models/Product');

const ProductController = {
    getAll(req, res) {
        Product.find() //include equivalent
            .then(products => res.send(products))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },
    getById(req, res) {
        Product.findById(req.params._id)
            .populate('userId')
            .then(product => res.send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },
    async getBrand(req, res) {
        try {
            const products = await Product.find({brand: req.params.brand})
            res.send(products)

        } catch (error) {
            res.status(404).send('No hemos encontrado un producto de esa marca' + '\n' + error.message)
          }
    },
    async getProdutsDateNews(req, res) {
        try {
            const products = await Product.find()
            .sort({createdAt: -1})
            res.send(products)

        } catch (error) {
            res.status(404).send('No hemos encontrado productos que ordenar' + '\n' + error.message)
          }
    },
    insert(req, res) {
        req.body.userId = req.user._id
        Product.create(req.body)
            .then(product => res.status(201).send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    }
}
module.exports = ProductController