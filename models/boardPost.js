import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const replySchema = new Schema(
    {
    author: {type: Schema.Types.ObjectId, ref: 'Profile'},
    content: {
        type: String,
        required: true
    }
  },{
    timestamps: true
  })

const boardPostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
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