const express = require('express'); 
const app = express(); 
const path = require('path'); 

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)))

 
app.set("view engine","ejs")
app.set("views",path.resolve("./views/templates"))

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/productdetail/1",(req,res)=>{
    res.render("darkcircle")
})
app.get("/productdetail/2",(req,res)=>{
    res.render("youngerlooking")
})
app.get("/productdetail/3",(req,res)=>{
    res.render("o3")
})
app.get("/productdetail/4",(req,res)=>{
    res.render("soulflower")
})
app.get("/productdetail/5",(req,res)=>{
    res.render("wishcare")
})
app.get("/productdetail/6",(req,res)=>{
    res.render("nyka")
})
app.get("/productdetail/7",(req,res)=>{
    res.render("nykarose")
})
app.get("/productdetail/8",(req,res)=>{
    res.render("sunscreen")
})
app.get("/productdetail/9",(req,res)=>{
    res.render("coffebody")
})
app.get("/productdetail/10",(req,res)=>{
    res.render("dailyglow")
})
app.get("/productdetail/11",(req,res)=>{
    res.render("hairoil")
})
app.get("/productdetail/12",(req,res)=>{
    res.render("aloevera")
})
app.get("/skincare",(req,res)=>{
    res.render("skincare")
})
app.get("/haircare",(req,res)=>{
    res.render("haircare")
})
app.get("/naturalcare",(req,res)=>{
    res.render("bathcare")
})



app.listen(process.env.port || 3000); 
console.log('Running at Port 3000'); 