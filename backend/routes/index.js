const express = require('express')
const authToken = require('../middleware/authToken')

const router = express.Router()

const userSignUpController = require('../Controller/user/userSignUpController');
const userSignInController = require('../Controller/user/userSignIn');
const userDetailsController = require('../Controller/user/userDetails')
const userLogout = require('../Controller/user/userLogOut')
const allUsers = require('../Controller/user/allUsers')
const updateUser = require('../Controller/user/updateUser')
const uploadProduct=require("../Controller/product/uploadProduct")
const getProductController=require("../Controller/product/getProduct")
const updateProductController=require("../Controller/product/updateProduct")
const getCategoryProduct=require("../Controller/product/getCategoryProductOne")
const getCategoryWiseProduct=require("../Controller/product/getCategoryWiseProduct")
const getProductDetails=require("../Controller/product/getProductDetails")
const addToCartController=require("../Controller/user/addToCartController")
const countAddToCartProduct=require("../Controller/user/countAddToCartProduct")
const addToCartViewProduct=require("../Controller/user/addToCartViewProduct")
const updateAddToCartProduct=require("../Controller/user/updateAddToCartProduct")
const deleteAddToCartProduct=require("../Controller/user/deleteAddToCartProduct")
const searchProduct=require("../Controller/product/searchProduct")
const filterProductController=require( '../Controller/product/filterProduct');



router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)
router.post("/upload-product",authToken,uploadProduct)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)



module.exports = router