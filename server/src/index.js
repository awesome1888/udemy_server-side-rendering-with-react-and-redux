const express = require('express');
const app = express();

const React = require('react');
const renderToString = require('react-dom/server').renderToString;

const Home = require('./client/component/home.js').default;

app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    res.send(content);
});

app.listen(3000, () => {
    console.dir('Listening on 3000');
});
