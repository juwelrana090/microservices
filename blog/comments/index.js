const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

// Create an Express application
const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};


app.get('/posts/:id/comments', (req, res) => {
    const comments = commentsByPostId[req.params.id] || [];
    res.send(comments);
});

app.post('/posts/:id/comments', (req, res) => {
    const { comment } = req.body;
    const commentId = randomBytes(4).toString('hex');

    if (!comment) {
        return res.status(400).send('Missing required fields');
    }

    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, comment });
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log('Example app listening on port 4001!')
    console.log('http://localhost:4001/')
});

