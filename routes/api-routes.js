//dependencies
var db = require("../models");

//exporting
module.exports = function(app) {
	
	//Requests from the blog and post to the MySQL database
		//routes that render handlebars pages
	//Get all the the posts
	app.get("/api/blog", function(req,res){
		db.Blog.findAll({}).then(function(dbBlog) {
			res.json(dbBlog);
		});
	});
	//Get single post
	app.get("/api/blog/:id", function(req, res) {
		db.Blog.findOne({
			where: {
				id: req.params.id
			}
		}).then(function(dbBlog) {
			res.json(dbBlog);
		});
	});
	//Post request from post page
	app.post("/api/blog", function(req, res) {
		console.log(req.body);
		db.Blog.create({
			title: req.body.blogtitle,
			body:req.body.blogtext
		}).then(function(dbBlog) {
			res.json(dbPost);
		})
	})
	//Delete request from blog page
	app.delete("/api/blog/:id", function(req, res) {
		db.Blog.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbBlog) {
			res.json(dbBlog)
		});
	});
	//Put request to edit
	app.put("api/post", function(req, res) {
		db.Blog.update(req.body,
		{
			where: {
				id: req.body.id
			}
		}).then(function(dbBlog) {
			res.json(dbBlog);
		});
	});
};