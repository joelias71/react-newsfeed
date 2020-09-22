import React from 'react'
import Card from '../components/Card'
import './Page.css'

function NewsContainer({title}) {
    return (
        <div className='news-container' >
            <h1 className='news-container__title' >{title}</h1>
            <div className='news-container__list' >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default NewsContainer
