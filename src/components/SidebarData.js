import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import PublicIcon from '@material-ui/icons/Public'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import MovieIcon from '@material-ui/icons/Movie'
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball'
import BrushIcon from '@material-ui/icons/Brush'

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <HomeIcon />,
        cName: 'navbar-text'
    },
    {
        title: 'Política',
        path: '/politic',
        icon: <AccountBalanceIcon />,
        cName: 'navbar-text'
    },
    {
        title: 'Internacionales',
        path: '/international',
        icon: <PublicIcon />,
        cName: 'navbar-text'
    },
    {
        title: 'Tecnología',
        path: '/technology',
        icon: <LaptopMacIcon />,
        cName: 'navbar-text'
    },
    {
        title: 'Espectáculos',
        path: '/entertainment',
        icon: <MovieIcon />,
        cName: 'navbar-text'
    },
    {
        title: 'Deportes',
        path: '/sport',
        icon: <SportsVolleyballIcon />,
        cName: 'navbar-text'
    },
    {
        title: 'Diseño',
        path: '/design',
        icon: <BrushIcon />,
        cName: 'navbar-text'
    }
]
