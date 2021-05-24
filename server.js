// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://chris:Merrychristmas@cluster0.0ze8b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI ||'mongodb://localhost/mern_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
})

// Schema

const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date:{
        type: String,
        default: Date.now()
    }
});

// Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// Saving data to our mongo database
const data = {
    title: 'Welcome to my home',
    body: 'I help folks with their homework'
};

const newBlogPost = new BlogPost(data); // instance of the model

// newBlogPost.save((error) => {
//     if (error){
//         console.log('Ooops, something has happened');
//     }else{
//         console.log('Data has been saved!');
//     }
// });

// HTTP request logger
app.use(morgan('tiny'));

// Routes
app.get('/api/', (req, res) =>{
    // const data = {
    //     username: 'accimesterlin',
    //     age: 5
    // };

    BlogPost.find({})
        .then((data) =>{
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) =>{
            console.log('error: ', daerrorta);
        });

    
});

app.get('/api/name', (req, res) =>{
    const data = {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));