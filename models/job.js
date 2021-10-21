import mongoose from 'mongoose'



const jobSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      default: "No job"
    },
    description: {
      type: String,
      default: "No description"
    },
    employedBy: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
    reviews: {type: mongoose.Schema.Types.ObjectId, ref: "JobReview"},
  },
  {
    timestamps: true,
  }
)

const Job = mongoose.model('Job', jobSchema)

export {
    Job
  }
