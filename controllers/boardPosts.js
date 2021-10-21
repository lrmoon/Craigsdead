import {BoardPost} from '../models/boardPost.js'

function index(req,res){
    BoardPost.find({})
    .populate('author')
    .then(boardPosts =>{
        console.log(req.user)
       res.render('boardPosts/index', {
        boardPosts,
        user: req.user

    })
    })
    .catch(err => {
        console.log(err);
    })
}

function newPost(req,res){
   
    console.log(req.user)
    res.render('boardPosts/new',{ 
        title: "Add Post",
        user: res.locals.user
        
    });
}

function create(req, res) {
    req.body.author = req.user.profile;
    BoardPost.create(req.body)
    .then(result => {
        res.redirect('/boardposts')
    })
    .catch(err => {
        console.log(err);
    })
  }

  function show(req, res) {
    BoardPost.findById({}, function(err,boardPosts){
        res.render('boardposts/show', {
            boardPosts,
            title: 'Job Details'
        })
    })
}

function deleteBoardPost(req, res){
    BoardPost.findByIdAndDelete(req.params.id)
        .then(results => res.redirect('/boardposts'))
        .catch(err => console.log(err))
}


export{
    index,
    newPost as new,
    show,
    create,
    deleteBoardPost as delete
}