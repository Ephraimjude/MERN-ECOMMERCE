const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(con => {
    console.log(`MongoDB Database connected to HOST: ${con.connection.host}`);
  }).catch(err => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
  });
};

module.exports = connectDatabase;
