const express = require("express");
const { body } = require("express-validator");

const router = express.Router();
const feedController = require("../controllers/feed");
const Post = require("../models/post");

//  GET http://localhost:8080/posts
router.get("/posts", feedController.getPosts);
// POST http://localhost:8080/post
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 7 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);
// GET http://localhost:8080/post/:postId
router.get("/post/:postId", feedController.getPost);
// PUT http://localhost:8080/post/:postId
router.put(
  "/post/:postId",
  [
    body("title").trim().isLength({ min: 7 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);
// DELETE http://localhost:8080/post/:postId
router.delete("/post/:postId", feedController.deletePost);
module.exports = router;
