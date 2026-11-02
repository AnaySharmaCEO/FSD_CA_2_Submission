import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/Database_Connection.js';
import feedbackRoutes from './routes/Feedback_Routes.js';
import handleApiError from './middleware/Error_Handler.js';

dotenv.config();

const feedbackApp = express();
const serverPort = process.env.PORT || 3000;

feedbackApp.use(express.json());
feedbackApp.use('/api/feedback', feedbackRoutes);
feedbackApp.use(handleApiError);

async function startFeedbackServer() {
  try {
    await connectDatabase();

    feedbackApp.listen(serverPort, () => {
      console.log(`Feedback API is listening on port ${serverPort}`);
    });
  } catch (error) {
    console.error('Could not start the feedback API:', error.message);
    process.exit(1);
  }
}

startFeedbackServer();