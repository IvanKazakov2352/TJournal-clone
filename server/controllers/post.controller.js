import PostService from '../services/post.service'

class PostController {
  async getPosts(req, res) {
    try {
      const posts = await PostService.getPosts()
      return res.json(posts)
    } catch (error) {
      console.log(error)
    }
  }
  async getPostByID(req, res) {
    try {
      const post = await PostService.getPostID(req.body.id)
      return res.json(post)
    } catch (error) {
      console.log(error)
    }
  }
  async createPost(req, res) {
    try {
      const post = await PostService.createPost(req.body)
      return res.json(post)
    } catch (error) {
      console.log(error)
    }
  }
  async updatePost(req, res) {
    try {
      const post = await PostService.updatePost(req.body._id, req.body)
      return res.json(post)
    } catch (error) {
      console.log(error)
    }
  }
  async deletePost(req, res) {
    try {
      const post = await PostService.deletePost(req.body.id)
      return res.json(post)
    } catch (error) {
      console.log(error)
    }
  }
  async sortPostsByAscendin(req, res) {
    try {
      const posts = await PostService.sortPostsByAscendin()
      return res.json(posts)
    } catch (error) {
      console.log(error)
    }
  }
  async sortPostsByDescendin(req, res) {
    try {
      const posts = await PostService.sortPostsByDescendin()
      return res.json(posts)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new PostController()
