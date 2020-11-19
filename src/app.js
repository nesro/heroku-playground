const path = require('path')
const express = require('express')

const port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.join(__dirname, "../public")))

app.get('/hello', (req, res) => {
    res.send('Hello from Express!')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})