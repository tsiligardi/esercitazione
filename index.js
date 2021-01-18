const express= require("express")
const app= new express()
const utils=require("./function")
const bodyparser= require("body-parser")
const fetch=require("node-fetch")

app.get("/",(req,res)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response =>response.json())
    .then(response=>res.send(utils.elpost(response)))

    .catch(err =>console.log(err))
})

app.get("/:id",(req,res)=>{
    const id=req.params.id
    fetch( "https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(response=>{
        const post=utils.getpost(response,id)
        fetch(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
        .then(comment=>comment.json())
        .then(comment=>{
            res.send(post + utils.getcomments(comment))
        })
    })
    .catch(err=>console.log(err))
})
app.listen(8080,()=>console.log('server listening on port 8080'))