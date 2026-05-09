const express = require('express')
const app = express()
app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.all('/inspect', (req, res) => {
  res.json({
    method: req.method,
    path: req.path,
    headers: req.headers,
    body: req.body,
    query: req.query,
  })
})

app.listen(3000, () => console.log('listening on port 3000'))