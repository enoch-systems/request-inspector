const express = require('express')
const app = express()
app.use(express.json())

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