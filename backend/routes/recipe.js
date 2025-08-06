const express = require('express')
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,uplode} = require('../controller/recipe')
const verifyToken = require('../middleware/auth')
const router = express.Router()
router.get("/",getRecipes) //get all recipes
router.get("/:id",getRecipe)//get recipe by id
router.post("/",uplode.single('file'), verifyToken, addRecipe) //ading recipe 
router.put("/:id",uplode.single('file'),editRecipe)//editing recipe
router.delete("/:id",deleteRecipe)//deleting recipe 


module.exports=router