const firebase = require('firebase');
const Config = require('../Config/Config.json');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;


firebase.initializeApp({
    apiKey: Config.apiKey,
    authDomain: Config.authDomain,
    databaseURL: Config.databaseURL,
    storageBucket: Config.storageBucket
});

//Create reference
const db = firebase.database().ref().child('object');

//Sync object changes
db.on('value', (data) => console.log(data));


app.get('/', (req,res) => {
    res.send("HELLO WORLD");
});

app.listen(port, () => {
    console.log("Listening on port:" + port);
})

