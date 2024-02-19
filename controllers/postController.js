const Post = require('../models/postModel');

exports.getAllPosts = async (req,res, next) => {
    try {    
        const posts = await Post.find();
        console.log('getAllPosts at ' + Date.now.toLocaleString());
        res.status(200).send({
            status :'success',
            results: posts.length,        
            data: {
                posts : posts
            }
        });
    } catch (error) {
        res.status(500).send({
            status :'fail',
        });
    }
} 

//localhost:3000/posts/:id
exports.getOnePost = async(req,res,next) => {
    console.log('getOnePost at ' + Date.now);
    try {    
        const post = await Post.findById(req.params.id);
        res.status(200).send({
            status :'success',            
            data: {
                post
            }
        })
    } catch (error) {
        res.status(500).send({
            status :'fail',
        });
    }
}


//localhost:3000/posts/:id
exports.createPost = async(req,res,next) => {
    console.log('createPost at ' + Date.now);
    try {    
        const post = await Post.create(req.body);

        res.status(200).send({
            status :'success',            
            data: {
                post
            }
        })
    } catch (error) {
        res.status(500).send({
            status :'fail',
        });
    }
}

//localhost:3000/posts/:id
exports.updatePost = async(req,res,next) => {
    console.log('updatePost at ' + Date.now);
    try {    
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).send({
            status :'success',            
            data: {
                post
            }
        })
    } catch (error) {
        res.status(500).send({
            status :'fail',
        });
    }
}

//localhost:3000/posts/:id
exports.deletePost = async(req,res,next) => {
    console.log('deletePost at ' + Date.now);
    try {    
        const post = await Post.findByIdAndDelete(req.params.id);

        res.status(200).send({
            status :'success'        
        });
    } catch (error) {
        res.status(500).send({
            status :'fail',
        });
    }
}

module.exports = exports;