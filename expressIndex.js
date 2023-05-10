const express = require('express')
const app = express()
const port = 9881

const constantData = require('./src/utils/constant.js')

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

const resConfig = (data) => {
  return {
    success: 'success',
    code: 200,
    msg: '',
    data: data,
  }
}

// 获取首页作品list
app.get('/apiWorkCollectionList', (req, res) => {
  res.json(resConfig(constantData.workCollectionData))
})

// 获取首页设计师list
app.get('/designerList', (req, res) => {
  res.json(resConfig(constantData.designerData))
})

// 人才页面list
app.get('/apiTalentList', (req, res) => {
  res.json(resConfig(constantData.talentData))
})

app.post('/apiRegister', (req, res) => {
  res.send(resConfig({ status: true }))
})
app.post('/checkLogin', (req, res) => {
  res.send(resConfig({ isLoggedIn: false }))
})
app.post('/testPost', (req, res) => {
  res.send(resConfig('hello testPost'))
})

app.listen(port, () => {
  console.log(`listenning ${port}`)
})
