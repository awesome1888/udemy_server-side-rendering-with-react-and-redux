import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer.js';
import createStore from './helpers/create-store.js';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();

    // some logic to initialize and load data into the store

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.dir('Listening on 3000');
});
