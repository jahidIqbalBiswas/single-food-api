const foodModel = require("../models/foodModel");
exports.createFood = async (req, res) => {
    try{
        const postBody = req.body
        const data = await foodModel.create(postBody)
        if(data){
            res.status(201).json({msg: 'Successfully created food'})
        }else{
            res.json({msg: 'Failed to create food'})
        }
    }catch(err){
        res.json({err})
    }
}
exports.readFood = async (req, res) => {
    try{
        const data = await foodModel.find()
        if(data){
            res.json({msg: 'all foods',total_count:data.length,data})
        }else{
            res.json({msg: 'Failed to read food'})
        }
    }catch(err){
        res.json({err})
    }
}
exports.updateFood = async (req, res) => {
    try{
        const {id} = req.params
        const postBody = req.body
        const data = await foodModel.findByIdAndUpdate({_id:id},postBody)
        if(data){
            res.json({msg: 'Successfully updated food'})
        }else{
            res.json({msg: 'Failed to update food'})
        }
    }catch(err){
        res.json({err})
    }
}
exports.deleteFood = async (req, res) => {
    try{
        const {id} = req.params
        const data = await foodModel.findByIdAndDelete({_id:id})
        if(data){
            res.json({msg: 'Successfully deleted food'})
        }else{
            res.json({msg: 'Failed to delete food'})
        }
    }catch(err){
        res.json({err})
    }
}