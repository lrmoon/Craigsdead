import mongoose from 'mongoose'



const jobReviewSchema = new mongoose.Schema(
  {
    rating:{
        type: Number,
        min: 1,
        max: 5
    },
    content: String,
    job: {type: mongoose.Schema.Types.ObjectId, ref: "Job"},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  },
  {
    timestamps: true,
  }
)

const JobReview = mongoose.model('JobReview', jobReviewSchema)

export {
    JobReview
  }