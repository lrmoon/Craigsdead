import { Profile } from "../models/profile.js"
import { Job } from "../models/job.js"

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
    Profile.findById(req.params.id)
    // Populate friends to get profile data for each of them
    .populate('friends')
    .then(profile => {
      // Use the profile clicked to find games belonging to that user
      Job.find({ collectedBy: profile._id })
      .then(jobs => {
        // Find the profile of the current logged in user
        Profile.findById(req.user.profile)
        .then(userProfile => {
          res.render('profiles/show', {
            // Profile of the user clicked
            profile,
            // Profile of the logged in user
            userProfile,
            title: `${profile.name}'s profile`,
            jobs
          })
        })
      })
  
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
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