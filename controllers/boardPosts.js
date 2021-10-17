import {BoardPost} from '../models/boardPost.js'

function index(req,res){
    BoardPost.find({}, function(err,boardPosts){
        res.render('boardPosts/index', {
            boardPosts,
            title: 'News Board'
        })
    })
}

function newPost(req,res){
    res.render('boardPosts/new',{ 
        title: "Add Post",
        
    });
}

function create(req, res) {
    BoardPost.create(req.body, function(error, boardpost) {
      res.redirect('/boardposts')
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