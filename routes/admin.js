const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/admin/blogs/create", (req, res) => {
    // res.sendFile(path.join(__dirname, "../view/admin", "blog-create.html"));
    res.render("admin/blog-create");
});
router.use("/admin/blogs/:id", (req, res) => {
    // res.sendFile(path.join(__dirname, "../view/admin", "blog-edit.html"));
    res.render("admin/blog-edit");
});
router.use("/admin/blogs", (req, res) => {
    // res.sendFile(path.join(__dirname, "../view/admin", "blog-list.html"));
    res.render("admin/blog-list");
});

module.exports = router
