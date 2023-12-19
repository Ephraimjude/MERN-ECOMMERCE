const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

//Handling uncaught exceptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down due to an Uncaught Exception');
  process.exit(1)
})

// Setting up config file
dotenv.config({ path: './backend/config/config.env' }); // Adjust the path as needed

// Connecting to the database
connectDatabase();

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} node.`);
});

//Handle unhandled promise rejection
process.on('unhandledRejection', err => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down the server due to Unhandled Promise rejection');
  server.close(() => {
    process.exit(1)
  })
})
