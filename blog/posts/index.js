const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

// Create an Express application
const app = express();
app.use(cors());
app.use(bodyParser.json());

const posts = {};


app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const { title } = req.body;
    const id = randomBytes(4).toString('hex');

    if (!title) {
        return res.status(400).send('Missing required fields');
    }
    posts[id] = { id, title };
    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!')
    console.log('http://localhost:4000/posts')
});

