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

const resConfig = (data) => {
  return {
    success: 'success',
    code: 200,
    msg: '',
    data: data,
  }
}

app.get('/workItemDetailList', (req, res) => {
  res.json(
    resConfig([
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '草木茶舍 | 泡茶古朴又惊艳',
        author: '黄冠之',
        type: '空间，空间餐饮',
        thumb: '69',
        eye: '3018',
        publishTime: '1天前',
      },
      {
        title: '字体设计 | Font design',
        author: '戴秀',
        type: '平面，字体',
        thumb: '157',
        eye: '6990',
        publishTime: '2天前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
      {
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
      },
    ])
  )
})

app.post('/testPost', (req, res) => {
  res.send(resConfig('hello testPost'))
})

app.listen(port, () => {
  console.log(`listenning ${port}`)
})
