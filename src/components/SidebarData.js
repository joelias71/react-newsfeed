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
        cName: 'navbar-text',
        value: 0
    },
    {
        title: 'Política',
        path: '/politic',
        icon: <AccountBalanceIcon />,
        cName: 'navbar-text',
        value: 1
    },
    {
        title: 'Internacionales',
        path: '/international',
        icon: <PublicIcon />,
        cName: 'navbar-text',
        value: 2
    },
    {
        title: 'Tecnología',
        path: '/technology',
        icon: <LaptopMacIcon />,
        cName: 'navbar-text',
        value: 3
    },
    {
        title: 'Espectáculos',
        path: '/entertainment',
        icon: <MovieIcon />,
        cName: 'navbar-text',
        value: 4
    },
    {
        title: 'Deportes',
        path: '/sport',
        icon: <SportsVolleyballIcon />,
        cName: 'navbar-text',
        value: 5
    },
    {
        title: 'Diseño',
        path: '/design',
        icon: <BrushIcon />,
        cName: 'navbar-text',
        value: 6
    }
]
