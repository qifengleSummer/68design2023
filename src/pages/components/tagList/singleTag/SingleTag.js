/**
 * tag组件
 * @desc 关于颜色：1、可以统一配置标签颜色；2、也可单独指定颜色。
 *       关于hover模式：如果activeMode为true，则表示组件进入hover模式[点击高亮]，你可以给tag指定hover样式，及选中样式
 * @param {Object} [tagConfig] - 统一配置的标签颜色
 * @param {Object} [singleData] - 单个标签数据，包含文字和样式，如果配置了指定样式则使用指定样式
 * @param {Function} [setActiveIndexF] - 父组件的选中事件
 * @param {Number} [currIndex] - 当前tag在list里的索引
 * @param {Number} [activeIndex] - 当前选中的索引，用来判断高亮样式
 **/

import './SingleTag.less'
import { Tag } from 'antd'
import { useEffect, useState } from 'react'

const SingleTag = ({ tagConfig, singleData, setActiveIndexF, currIndex, activeIndex }) => {
  const [colorConfig, setColorConfig] = useState(tagConfig.consistentColor) // 设置统一样式
  const { backgroundColor, color } = singleData

  useEffect(() => {
    // 指定single样式，则设置single样式
    let temp = {}
    if (backgroundColor) {
      temp['backgroundColor'] = backgroundColor
    }
    if (color) {
      temp['color'] = color
    }
    if (Object.keys(temp).length) setColorConfig(temp)

    if (currIndex === activeIndex && tagConfig.activeMode) {
      // 处于activeMode状态，并且该tag被点击了，则添加hover样式
      setColorConfig(tagConfig.activeColor)
    } else {
      setColorConfig(tagConfig.consistentColor)
    }
  }, [activeIndex])

  const overTag = () => {
    if (!tagConfig.activeMode) return
    setColorConfig(tagConfig.activeColor)
  }
  const outTag = () => {
    if (!tagConfig.activeMode) return
    if (currIndex === activeIndex) return // 被点击的tag鼠标移出时，也要保持样式
    setColorConfig(tagConfig.consistentColor)
  }
  const chosen = () => {
    if (!tagConfig.activeMode) return
    setActiveIndexF(currIndex)
  }
  return (
    <Tag
      className="tag-single-style"
      style={{ ...colorConfig }}
      onMouseOver={overTag}
      onMouseOut={outTag}
      onClick={chosen}
    >
      {singleData.text}
    </Tag>
  )
}

export default SingleTag
