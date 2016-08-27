import express from 'express'
import path from 'path'

const app = express()

app.use('/public', express.static(path.resolve(__dirname, '..', 'public')))

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(8000, function () {
    console.log("Server is listening on port 8000")
})
