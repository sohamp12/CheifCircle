const Recipes=require("../models/recipe")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const filename = Date.now() + '-' + file.fieldname
      cb(null, filename)
    }
  })
  
  const upload = multer({ storage: storage })

const getRecipes=async(req,res)=>{
    const recipes=await Recipes.find()
    return res.json(recipes)
}

const getRecipe=async(req,res)=>{
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe=async(req,res)=>{
    console.log(req.user)
    const {title,ingredients,instructions,time}=req.body 

    if(!title || !ingredients || !instructions)
    {
        res.json({message:"Required fields can't be empty"})
    }

    const newRecipe=await Recipes.create({
        title,ingredients,instructions,time,coverImage:req.file.filename,
        createdBy:req.user.id
    })
   return res.json(newRecipe)
}

const editRecipe = async (req, res) => {
    const { title, ingredients, instructions, time } = req.body;

    try {
        const recipe = await Recipes.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        const updatedData = {
            title,
            time,
            ingredients: ingredients.split(","),
            instructions
        };

        if (req.file) {
            updatedData.coverImage = req.file.filename;
        }

        const updatedRecipe = await Recipes.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        res.json({ message: "Recipe updated", recipe: updatedRecipe });
    } catch (error) {
        console.error("Error updating recipe:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipes.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.json({ message: "Recipe deleted", recipe: deletedRecipe });
    } catch (error) {
        console.error("❌ Error deleting recipe:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    console.log("🔴 DELETE /recipe/:id hit with ID:", req.params.id);

};


module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload}