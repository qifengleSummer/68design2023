import './NavListChild.less'
import { Link } from 'react-router-dom';

const NavListChild= (props) => {
    return (
        <ul className="nav-list-child">
            {
                props.childData.map((item, index) => (
                    <li
                        className='nav-list-child-li' 
                        key={item.key}
                        >
                        <Link target="_blank" to="/login">{item.label}</Link>                        
                    </li>
                ))
            }
        </ul>
    )
}

export default NavListChild