const express = require('express')
const app = express()
const PORT = process.env.PORT || 80

app.use(express.static('app'));

app.get('/', function (req, res) {
    res.send('Hello World');
})
app.listen(PORT, () => {
    console.log('Server ok');
})
