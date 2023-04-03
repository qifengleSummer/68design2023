import Mock from 'mockjs'
const dataList = require('@/utils/constant.js')

const registerUrl = /\/apiRegister/,
  workUrl = /\/apiWorkCollectionList/,
  talentUrl = /\/apiTalentList/,
  designerUrl = /\/designerList/

const mocks = [
  {
    url: registerUrl,
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          status: true,
        },
      }
    },
  },
  {
    url: workUrl,
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: dataList.workCollectionData,
      }
    },
  },
  {
    url: talentUrl,
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: dataList.talentData,
      }
    },
  },
  {
    url: designerUrl,
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
