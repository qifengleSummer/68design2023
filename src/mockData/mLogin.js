import Mock from 'mockjs'
const dataList = require('@/utils/constant.js')

const mocks = [
  {
    url: '/apiWorkCollectionList',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: dataList.workCollectionData,
      }
    },
  },
  {
    url: '/apiTalentList',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: dataList.talentData,
      }
    },
  },
  {
    url: '/designerList',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: dataList.designerData,
      }
    },
  },
]

Mock.setup({
  timeout: '200 - 400',
})
for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response)
}
