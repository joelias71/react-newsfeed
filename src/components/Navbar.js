import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import { SidebarData } from './SidebarData'
import './Navbar.css'

function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className='navbar' >
                <MenuIcon className='navbar__menu-bars' onClick={showSidebar} />
            </div>
            <nav className={sidebar ? 'navbar-menu active' : 'navbar-menu'}>
                <ul className='navbar-menu__items'>
                    <li className='navbar-menu__items__toggle' >
                        <CloseIcon className='navbar-menu__menu-bars' onClick={showSidebar} />
                    </li>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName} >
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
