const express = require('express');
const app = express();

const PORT = 5000;


app.use(`/`, express.static(__dirname + '/server.js'));

app.listen(PORT, () => {
    console.log(`Server is running : http://localhost:${PORT}`);

});