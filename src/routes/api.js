const {createFood, readFood, updateFood, deleteFood} = require("../controllers/foodController");

const router = require('express').Router();

router.post('/create',createFood)
router.get("/foods",readFood)
router.put("/update/:id",updateFood)
router.delete("/delete/:id",deleteFood)

module.exports = router;