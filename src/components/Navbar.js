import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import { connect } from 'react-redux'
import { searchData, setTitle } from '../actions/actions'

function Navbar(props) {

    const [input, setInput] = useState('')
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const searchByEnter = e => {
        if (e.key === 'Enter' && input.length > 2) {
            props.searchData(input)
            props.setTitle(`Búsqueda: ${input}`)
        }
    }

    return (
        <>
            <div className='navbar' >
                <Link to='#' >
                    <MenuIcon className='navbar__menu-bars' onClick={showSidebar} />
                </Link>
                <h1>News Room</h1>
                <div className='navbar__center'>
                    <input type='text' 
                           placeholder="Buscar" 
                           value={input} 
                           onKeyDown={e => searchByEnter(e)}
                           onChange={e => setInput(e.target.value)} />
                    <SearchIcon />
                </div>
            </div>
            <nav className={sidebar ? 'navbar-menu active' : 'navbar-menu'}>
                <ul className='navbar-menu__items'>
                    <li className='navbar-menu__items__toggle' >
                        <Link to='#' >
                            <CloseIcon className='navbar-menu__menu-bars' onClick={showSidebar} />
                        </Link>
                    </li>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName} onClick={showSidebar} >
                                <Link to={item.path} >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchData: value => dispatch(searchData(value)),
        setTitle: title => dispatch(setTitle(title))
    }
}

const NavbarContainer = connect(
    null,
    mapDispatchToProps
)(Navbar)

export default NavbarContainer
