import express from 'express';
import { v4 as uuidv4 } from "uuid";
uuidv4();

const router = express.Router();

const productcategorys = [
    // {
    // category_name:"cloths",
    // status: "good",
    // },
    //  {
    // category_name:"watch",
    // status: "good",
    // }
]

const productdetails = [] ;

router.get('/',(req,res) => {
    res.send("Hello from Product");
})

//API FOR GET PRODUCT CATEGORY
router.get('/productcategorys',(req,res) => {
    res.send(productcategorys);
});

//API FOR POST PRODUCT CATEGORY
router.post('/addproductcategory',(req,res) => {
    const productcategory = req.body;

    productcategorys.push({...productcategory, id : uuidv4() });

   res.send(`product category name ${productcategory.category_name} added successfully`);
   console.log("POST ROUTE REACHED");
});

//API FOR POST PRODUCT DETAILS
router.post('/addproductdetail',(req,res) => {
    const productdetail = req.body ;

    productdetails.push({...productdetail , id : uuidv4() });
    res.send(`product details added succesfully`)
});

//API FOR GET PRODUCT DEATAILS
router.get('/productdetails',(req,res) => {
    res.send(productdetails);
});

export default router;