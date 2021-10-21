import mongoose from 'mongoose'



const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  email: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  job: {type: mongoose.Schema.Types.ObjectId, ref: "Job"},
  jobReview: {
    type: mongoose.Schema.Types.ObjectId,
     ref: "JobReview",
    },
  applicants: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Profile",
    },
  boardPosts: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "BoardPosts"}
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}