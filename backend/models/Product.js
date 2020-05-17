const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const ProductSchema = new mongoose.Schema({
    brand: {
        type: String                                               
    },
    model: {
        type: String                                                             
    },
    processor: {
        type: String                                                              
    },
    memory: {
        type: String                                     
    },
    hardDisk: {
        type: String                                    
    },
    sizeMonitor: {
        type: String                                      
    },
    description: {
        type: String                                                        
    },
    price: {
        type: Number                                                        
    },
    imgUrl: {
        type: String                                
    },
    stock: {
        type: Number
    },
    numOrders: {
        type: Number
    },
    promotion: {
        type: Boolean
    },
    orderIds: [{
        type: ObjectId,
        ref: 'Order'
    }],
    userId: {
        type: ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;