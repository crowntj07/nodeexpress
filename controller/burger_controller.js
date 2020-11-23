
const express = require("express");
 
const burger = require("../models/burger.js");           
const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        //burger data                  
        var burgerBurger = {
            burgers: data
        };
        //renders index.handlebars
        res.render("index", burgerBurger);
    });
});