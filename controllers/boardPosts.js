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
    res.render('boardPosts/new',{ 
        title: "Add Post",
        user: req.user
        
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
    BoardPost.findById(req.params.id)
        .populate('author')
        .then(boardPosts =>{
        res.render('boardposts/show', {
            boardPosts,
            title: 'Job Details',
            user: req.user
        })
    })
}

function deleteBoardPost(req, res){
    BoardPost.findByIdAndDelete(req.params.id)
        .then(results => res.redirect('/boardposts'))
        .catch(err => console.log(err))
}

function createReply(req, res){
    BoardPost.findById(req.params.id, function(err, boardPost){
        boardPost.replies.push(req.body);
        boardPost.save(function(err){
            res.redirect('/boardposts');
        })
    })
}

function edit(req, res) {
    console.log(req.body)
    BoardPost.findById(req.params.id)
    .then(boardPost => {
      res.render('boardPosts/edit', {
        title: `Edit Your Post`,
        boardPost,
        user: req.user
        
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }


  function update(req, res) {
    
    BoardPost.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(boardPost => {
      res.redirect(`/boardposts`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }


export{
    index,
    newPost as new,
    show,
    create,
    deleteBoardPost as delete,
    createReply,
    edit,
    update
}