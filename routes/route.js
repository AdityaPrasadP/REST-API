const Post=require('../models/Post')
module.exports = (app) => {
    app.get("/",async(req,res)=>{
       // res.send("This is the home page")
        console.log("Called home");
        try{
        const posts= await Post.find()
        res.send(posts)
        }catch(err){
            res.send({message:err})
        }
    })
    //get specific post
    app.get('/:postId',async(req,res)=>{
        console.log(req.params.postId)
        try{
            const posts= await Post.findById(req.params.postId)
            res.send(posts)
            }catch(err){
                res.send({message:err})
            }
    }) 

    //Delete a post
    app.delete('/:postId',async(req,res)=>{
        try{
            const removedPost= await Post.remove({_id:req.params.postId})
            res.json(removedPost)
        }catch(err){
            res.json({message:err})
        }
    })

 app.get("/career",(req,res)=>{
     res.send("This is Career route")
     console.log("Called");
 })

 app.post("/",(req,res)=>{
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description:req.body.description
    });
    post.save()
    .then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json({message:err})
    })
 })
}