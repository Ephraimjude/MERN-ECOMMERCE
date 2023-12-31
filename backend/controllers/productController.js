const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors.js');

//Creating a new product => api/v1/admin/product/view
exports.newProduct = catchAsyncErrors( async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        data: product
    })
})


//Get all products => /api/v1/products
exports.getProducts = catchAsyncErrors( async (req, res, next) => {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    })
})

//Get single product details => /api/v1/product/:id

exports.getSingleProduct = catchAsyncErrors( async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    res.status(200).json({
        success: true,
        product
    });
})

//Update product => /api/v1/admin/product/:id
exports.updateProduct = catchAsyncErrors( async (req,res,next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return(new ErrorHandler('Product not found', 404));
    }

    product = await Product.findByIdAndUpdate (req.params.id, req.body,{
        new:true,
        runValidators: true,
        useAndModify: false
    });
    res.status(200).json({
        success: true,
        message: "Updated Successfully",
        product
    });
})

//Delete product => api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErrors( async (req,res,next) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return(new ErrorHandler('Product not found', 404));
    }

    await product.deleteOne();
    
    res.status(200).json({
        success: true,
        message: "Deleted Successfully"})
})