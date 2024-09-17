const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.status(200).send("cream")
});

app.listen(8080, () => "I'm alive")