const express = require('express');

// create an instance of express by calling the function returned above
const app = express();
const port = 5000;

app.use(express.static('server/public'));


// start up our server
app.listen(port, () => {
    console.log('listening on port: ', port);
})