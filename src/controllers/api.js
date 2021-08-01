import express from 'express';
import {
  findAllPosts,
  createPost,
  updatePost,
  removePost
} from '../models/post';

const router = express.Router();

// Get route
router.get('/', (req, res) => {
  res.send(`Model Post Endpoints`);
});

// GET Methods
router.get('/posts', (req, res) => {
  findAllPosts((posts) => {
    res.json({
      response: posts
    });
  });
});

// POST Methods
router.post('/post', (req, res) => {
  const { text, rating } = req.body;
  createPost(text, rating, (data, error = false) => {
    if (error) {
      res.json({
        error: true,
        details: error
      });
    } else {
      res.json({
        response: {
          saved: true,
          post: data
        }
      });
    }
  });
});

// PUT Methods
router.put('/post/:id', (req, res) => {
  const {
    params: { id },
    body: { text, rating }
  } = req;

  updatePost(id, text, rating, (affected, error) => {
    if (error) {
      res.json({
        error: true,
        details: error
      });
    } else {
      res.json({
        response: {
          updated: true,
          affected
        }
      });
    }
  });
});

// DELETE Methods
router.delete('/post/:id', (req, res) => {
  const {
    params: { id }
  } = req;
  removePost(id, (removed, error) => {
    if (error) {
      res.json({
        error: true,
        details: error
      });
    } else {
      res.json({
        response: {
          removed: true
        }
      });
    }
  });
});

export default router;
