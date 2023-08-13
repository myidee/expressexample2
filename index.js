const express = require('express')
const app = express();

PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
res.send("<h1>Hello World</h1>");
});

app.listen(PORT, ()=>{console.log('server started on port: ' + PORT)})