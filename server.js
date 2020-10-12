const express = require('express');

const app = express();

app.use(express.static('./dist/maximorero14'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/maximorero14/'}),
);

app.listen(process.env.PORT || 8080);