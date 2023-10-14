require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// routes
const authRouter = require('./routes/auth');
const  jobsRouter = require('./routes/jobs')

//connectDB
const connectDB = require('./db/connect');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const router = require('./routes/auth');

// mounting middleware with base path
app.use('api/v1/auth', authRouter)
app.use('api/v1/jobs', jobsRouter)
app.use(express.json());
// extra packages



//In your Express application, you should add the notFound middleware as the last middleware in your route-handling stack. This is because Express processes middleware functions in the order they are defined, and if no other middleware or route handler matches the requested route, the notFound middleware will be executed.

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();