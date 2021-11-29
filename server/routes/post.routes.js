import express from "express"
import postController from "../controllers/post.controller"
const router = express.Router()

router.get("/posts", postController.getPosts)
router.get("/posts/:id", postController.getPostByID)
router.post("/create_post", postController.createPost)
router.put("/update_post/:id", postController.updatePost)
router.delete("/delete_post/:id", postController.deletePost)
router.get("/posts_ascendin", postController.sortPostsByAscendin)
router.get("/posts_descendin", postController.sortPostsByDescendin)

export default router