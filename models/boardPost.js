import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const replySchema = new Schema(
    {
    name: {
      type: String,
      required: true
    },
    content: {
        type: String,
        required: true
    },
    email: {
      type: String
    }
  },{
    timestamps: true
  })

const boardPostSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Profile",
        
        
    },
    date:{
        type: Date,
        default: () => new Date()
    },
    replies:[replySchema],
  },
  {
    timestamps: true,
  }
)

const BoardPost = mongoose.model('BoardPost', boardPostSchema)

export {
    BoardPost
  }