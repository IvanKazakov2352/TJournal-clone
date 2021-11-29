import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  blocks: {
    type: Array,
    default: [],
  },
  comments: {
    type: Array,
    default: [],
    ref: "Comment"
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
})

export default model('Post', userSchema)
