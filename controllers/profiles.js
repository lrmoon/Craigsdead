import { Profile } from "../models/profile.js"
import { Job } from "../models/job.js"
import { User } from "../models/user.js"

function update(req, res) {
    Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(profile => {
      res.redirect(`/profiles/${profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }
  
  function edit(req, res) {
    Profile.findById(req.params.id)
    .then(profile => {
      res.render('profiles/edit', {
        title: `Editing ${profile.name}'s profile`,
        profile
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }
  
  
  function show(req, res) {
      Profile.findById(req.params.id, function(error, profile) {
        res.render('profiles/show', {
          profile,
          error: error,
          user: res.user
        })
      })
    }

  function index(req, res) {
    Profile.find({})
    .then(profiles => {
      res.render('profiles/index', {
        title: "Game Goose Profiles",
        profiles,
      })
    })
  }
  

  export {
    show,
    edit,
    update,
    index
  }