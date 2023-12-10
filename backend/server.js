const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

// Setting up config file
dotenv.config({ path: './backend/config/config.env' }); // Adjust the path as needed

// Connecting to the database
connectDatabase();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} node.`);
});
