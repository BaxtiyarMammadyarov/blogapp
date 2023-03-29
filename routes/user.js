const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../data/db")

const data = {
    title : "Populyar kurslar",
    categories : ["Web programlasdirm","PROGRAMLAMA"],
    blogs: [
        {id :1,
            title:"Full programlama",
            subTitle :"Ileri seviyye programlam1",
            img : "1.jpeg",
            isActive : true,
            homePage : true
        },
        {id :2,
            title:"Full programlama",
            subTitle :"Ileri seviyye programlam2",
            img : "1.jpeg",
            isActive : true,
            homePage : true
        },
        {id :3,
            title:"Full programlama",
            subTitle :"Ileri seviyye programlam3",
            img : "1.jpeg",
            isActive : false,
            homePage : true
        }
    ]
}

router.use("/blogs/:id",(req,res)=>{
    // res.sendFile(path.join(__dirname,"../view/users","blog-detail.html"));
    res.render("users/blog-detail");
});
router.use("/blogs",(req,res)=>{
    // res.sendFile(path.join(__dirname,"../view/users","blogs.html"));
    db.execute("select * from blog where isActive = 1")
    .then(result =>{
        console.log(result);
        res.render("users/blogs",{
            title:data.title,
            blogs : result[0],
        categories : data.categories});
    }).catch(err => console.log(err));
});

router.use("/",(req,res)=>{
    // res.sendFile(path.join(__dirname,"../view/users","index.html"));
    db.execute("select * from blog where isActive = 1 and homePage = 1")
    .then(result =>{
        console.log(result);
        res.render("users/index",{
            title:data.title,
            blogs : result[0],
        categories : data.categories});
    }).catch(err => console.log(err));
   
});

module.exports = router
