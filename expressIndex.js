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

// 获取首页作品list
app.get('/workItemDetailList', (req, res) => {
  res.json(
    resConfig([
      {
        AuthorType: 'P',
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'P',
        title: '草木茶舍 | 泡茶古朴又惊艳',
        author: '黄冠之',
        type: '空间，空间餐饮',
        thumb: '69',
        eye: '3018',
        publishTime: '1天前',
        province: '北京',
        area: '朝阳',
        influence: '24352',
        areaInfluence: '3332',
      },
      {
        AuthorType: 'P',
        title: '字体设计 | Font design',
        author: '戴秀',
        type: '平面，字体',
        thumb: '157',
        eye: '6990',
        publishTime: '2天前',
        province: '浙江',
        area: '杭州',
        influence: '43532',
        areaInfluence: '6332',
      },
      {
        AuthorType: 'P',
        title: '医疗用品',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '湖北',
        area: '武汉',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'B',
        title: '行车记录仪',
        author: '文化科技有限公司',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '甘肃',
        area: '兰州',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'P',
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'P',
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'P',
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'B',
        title: '春日出游',
        author: '设计有限公司',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'P',
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'P',
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'P',
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'P',
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'P',
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
      {
        AuthorType: 'P',
        title: '随风集',
        author: '金昌友',
        type: '网页，企业官网',
        thumb: '57',
        eye: '1990',
        publishTime: '22小时前',
        province: '广东',
        area: '深圳',
        influence: '4352',
        areaInfluence: '2332',
      },
    ])
  )
})

// 获取首页设计师list
app.get('/designerList', (req, res) => {
  res.json(
    resConfig([
      {
        id: '100001',
        name: '崔岳鑫',
        type: 'S',
        price: '6668',
        priceTag: '免费试用',
        tag: ['3C数码', '化妆美容'],
        desc: '7年电商设计经验，历经多个大促，熟练掌握多个类目',
      },
      {
        id: '100002',
        name: '张鑫',
        type: 'B',
        price: '5678',
        priceTag: '免费试用',
        tag: ['教育网站', '企业官网'],
        desc: 'web端网页设计、高校医院站、可视化大屏设计、8年设计经验',
      },
      {
        id: '100003',
        name: '李建龙',
        type: 'S',
        price: '9668',
        priceTag: '',
        tag: ['企业官网', '营销型网站'],
        desc: '10年工作经验、擅长品牌官网设计、整站设计前端程序全搞定、服务客户超百家',
      },
      {
        id: '100004',
        name: '札㢃鑫',
        type: 'S',
        price: '16668',
        priceTag: '免费试用',
        tag: ['企业官网', '整站开发'],
        desc: '高端企业品牌官网、动态交互视觉、追求极致的视觉效果、能不断提升专业能力',
      },
      {
        id: '100005',
        name: '札㢃鑫',
        type: 'A',
        price: '16668',
        priceTag: '免费试用',
        tag: ['企业官网', '整站开发'],
        desc: '高端企业品牌官网、动态交互视觉、追求极致的视觉效果、能不断提升专业能力',
      },
      {
        id: '100006',
        name: '札㢃鑫',
        type: 'B',
        price: '16668',
        priceTag: '免费试用',
        tag: ['企业官网', '整站开发'],
        desc: '高端企业品牌官网、动态交互视觉、追求极致的视觉效果、能不断提升专业能力',
      },
      {
        id: '100007',
        name: '札㢃鑫',
        type: 'S',
        price: '16668',
        priceTag: '免费试用',
        tag: ['企业官网', '整站开发'],
        desc: '高端企业品牌官网、动态交互视觉、追求极致的视觉效果、能不断提升专业能力',
      },
      {
        id: '100008',
        name: '札㢃鑫',
        type: 'A',
        price: '16668',
        priceTag: '免费试用',
        tag: ['企业官网', '整站开发'],
        desc: '高端企业品牌官网、动态交互视觉、追求极致的视觉效果、能不断提升专业能力',
      },
    ])
  )
})

// 人才页面list
app.get('/apiTalentList', (req, res) => {
  res.json(resConfig(new Array(Math.ceil(Math.random() * 5) + 1).fill({ a: '111' })))
})

app.post('/testPost', (req, res) => {
  res.send(resConfig('hello testPost'))
})

app.listen(port, () => {
  console.log(`listenning ${port}`)
})
