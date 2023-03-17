import './NavListChild.less'
import { Link } from 'react-router-dom';

const NavListChild= (props) => {
    return (
        <ul className="nav-list-child">
            {
                props.childData.map(item => {
                    if  ( props.title === '设计部') {
                        return (
                            <li className='nav-list-child-li' 
                                key={item.type}
                                >
                                <Link target="_blank" to="/login">{item.label}</Link>                        
                            </li>
                        )
                    } else {
                        return (
                            <li className='nav-list-child-li' 
                                key={item.type}
                                >
                                    <p className='other-label-style'>{item.label}</p>
                                    {
                                        item.children && item.children.map(inner => (
                                            <span key={inner.type} className="nav-list-child-li-child">
                                                <Link target="_blank" to="/login">{inner.label}</Link>   
                                            </span>
                                        ))
                                    }                   
                            </li>
                        )
                    }
                })
            }
        </ul>
    )
}

export default NavListChild