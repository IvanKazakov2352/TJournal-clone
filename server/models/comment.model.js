import { Schema, model } from 'mongoose'

const commentSchema = new Schema({
  postID: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0,
  },
})

export default model('Comment', commentSchema)
