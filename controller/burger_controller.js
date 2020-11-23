
const express = require("express");
 
const burger = require("../models/burger.js");           
const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        //burger data                  
        let burgerBurger = {
            burgers: data
        };
      
        res.render("index", burgerBurger);
    });
});

router.post("/insertOne", function (req, res) {
            
    burger.insertOne(req.body.burger_name, function (cheese) {
        
        res.redirect("/")
    });
});
router.post("/updateOne/:id", function (req, res) {
     
    let condition = "id = " + req.params.id;
    burger.updateOne({
     
        devoured: req.body.devoured
    }, condition, function () {
                                
        res.redirect("/");
    });
});

router.post("/deleteOne/:id", function (req, res) {
       
    let condition = "id = " + req.params.id;
               
    burger.deleteOne(condition, function () {
        res.redirect("/");
    });
});

module.exports = router; 