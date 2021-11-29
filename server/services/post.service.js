import Post from '../models/post.model'

class PostService {
  async createPost(post) {
    const newPost = await new Post(post)
    newPost.save()
    return newPost
  }
  async getPosts() {
    const posts = await Post.find()
    return posts
  }
  async getPostID(postID) {
    const post = await Post.findById(postID)
    return post
  }
  async updatePost(postID, post) {
    const newPost = await Post.findByIdAndUpdate(postID, post, {
      new: true,
    })
    return newPost
  }
  async deletePost(postID) {
    const post = await Post.findByIdAndRemove(postID)
    return post
  }
  async sortPostsByAscendin() {
    const posts = await Post.find({}).sort({ views: 'asc' })
    return posts
  }
  async sortPostsByDescendin() {
    const posts = await Post.find({}).sort({ views: 'desc' })
    return posts
  }
}

export default new PostService()
