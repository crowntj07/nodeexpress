
const express = require("express");   

const exphbs = require("express-handlebars");    
                              
const bodyParser = require("body-parser");                            


let routes = require("./controllers/burgers_controller.js");      

let app = express();                       
//local host port 2002                        
let PORT = process.env.PORT || 2002;                              


app.use(express.static("public"));                                


app.use(bodyParser.json());                                         
app.use(bodyParser.urlencoded({ extended: true }));                 


app.engine("handlebars", exphbs({                                 
    defaultLayout: "main"                                        
}));

app.set("view engine", "handlebars");                               


app.use(routes);                                                 

app.listen(PORT, function(){                             
console.log("Listening on Port: " + PORT);
});
