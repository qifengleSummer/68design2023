const express = require('express')
const app = express()
const port = 9881

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/workItemDetailList', (req, res) => {
  setTimeout(() => {
    res.send('hello world')
  }, 1000)
})

app.post('/testPost', (req, res) => {
  setTimeout(() => {
    res.send('hello testPost')
  }, 1000)
})

app.listen(port, () => {
  console.log(`listenning ${port}`)
})
