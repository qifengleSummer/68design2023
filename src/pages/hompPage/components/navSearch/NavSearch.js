import './NavSearch.less'
import { Input,List } from 'antd';
import SearchIcon from './searchIcon/SearchIcon'
import { useState, useRef } from "react";

const selectData = [
    {
        title: '作品',
        content: '搜索原创设计师作品'
    },
    {
        title: '服务',
        content: '根据技能搜索设计师'
    },
    {
        title: '案例',
        content: '搜索参考案例'
    },
    {
        title: '设计师',
        content: '精准搜索设计师'
    },
]

const NavSearch = () => {
    const [stateFocus, setStateFocus] = useState(false);
    const [placeholder, setPlaceholder] = useState('搜索');
    const inputVal = useRef(null)
    

    const inputOnFocus = () => {
        setStateFocus(true)
    }
    const inputOnBlur = () => {
        setTimeout(() => { // 延迟多少毫秒才能点到DOM
            setStateFocus(false)
        }, 200);
    }
    const searchContent = (text) => {
        setPlaceholder(text)
        if (inputVal.current.input.value) {
            window.open("http://localhost:3000/login");
        }
    }

    return  (
        <div className='nav-search-container'>
            <Input
            className='nav-search'
            placeholder={placeholder}
            prefix={<SearchIcon stateFocus={stateFocus}/>}
            onFocus={inputOnFocus}
            onBlur={inputOnBlur}
            ref={inputVal}
            />
            <ul className={['search-type-container', stateFocus ? 'show-search-type' : 'hide-search-type'].join(' ')}>
                {
                    selectData.map(item => (
                        <li key={item.title} onClickCapture={() => searchContent(item.content)}>
                            <b className='one'>{item.title}</b>
                            <p className='two'>{item.content}</p>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default NavSearch