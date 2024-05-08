const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get('/file.html', (req, res) => {
  res.sendFile('./file.html', { root: __dirname })
})

app.get('/*', (req, res) => {
  res.send('GET request')
})

app.post('/*', (req, res) => {
  res.json(req.body);
  res.send('POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
