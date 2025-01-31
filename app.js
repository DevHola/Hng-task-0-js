const express = require('express');
const cors = require('cors');
const app = express();

const response = {
    email: "connectola@yahoo.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/DevHola/hng-level-0-task.git"
};

app.use(cors({
    origin: '*',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'Content-Type'],
    maxAge: 12 * 60 * 60 
}));


app.get('/', (req, res) => {
    res.json(response);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
