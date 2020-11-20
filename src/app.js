const path = require('path')
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')

const port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.join(__dirname, "../public")))
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})