const express = require('express');

const app = express();

app.get('/health-checkup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username === 'harkirat' && password === 'pass') {
        if(kidneyId == 1 || kidneyId == 2){
            res.json({
                msg: 'Your kidney is fine!'
            })
        }
        
    }
    res.status(401).json({
        msg: 'something up with your inputs!'
    })
})

app.listen(3000, (req, res) => {
    console.log('Server app listening on port 3000...')
})