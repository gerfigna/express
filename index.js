const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.json(req.body);
  console.log('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
