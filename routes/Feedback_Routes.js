import express from 'express';
import {
  createFeedback,
  getFeedback,
  updateFeedbackStatus,
} from '../controllers/Feedback_Controller.js';

const feedbackRouter = express.Router();

feedbackRouter
  .route('/')
  .post(createFeedback)
  .get(getFeedback);

feedbackRouter.patch('/:id', updateFeedbackStatus);

export default feedbackRouter;