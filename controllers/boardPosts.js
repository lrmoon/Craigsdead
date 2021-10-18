import {BoardPost} from '../models/boardPost.js'

function index(req,res){
    BoardPost.find({})
    //
    .populate('author')
    .then(boardPosts =>{
       res.render('boardPosts/index', {
        boardPosts,
        title: 'News Board'
    })
    })
    .catch(err => {
        console.log(err);
    })
}

function newPost(req,res){
    res.render('boardPosts/new',{ 
        title: "Add Post",
        
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
        res.render('boardposts/index', {
            boardPosts,
            title: 'Job Details'
        })
    })
}



export{
    index,
    newPost as new,
    show,
    create
}