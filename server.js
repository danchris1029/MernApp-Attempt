// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI = 'mongodb+srv://chris:Merrychristmas@cluster0.0ze8b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI ||'mongodb://localhost/mern_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
})

// Saving data to our mongo database
// const data = {
//     title: 'Welcome to my home',
//     body: 'I help folks with their homework'
// };

// const newBlogPost = new BlogPost(data); // instance of the model

// newBlogPost.save((error) => {
//     if (error){
//         console.log('Ooops, something has happened');
//     }else{
//         console.log('Data has been saved!');
//     }
// });


app.use(cors());
// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);


app.listen(PORT, console.log(`Server is starting at ${PORT}`));