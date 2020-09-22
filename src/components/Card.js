import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className='newsCard' >
            <img src='https://play-images-prod-cms.tech.tvnz.co.nz/api/v1/web/image/content/dam/images/entertainment/shows/0-9/1-news-special/1_News_Special_showtile.png.2020-03-17T12:31:44+13:00.jpg?width=1200&height=630' alt='image' />
            <div className='newsCard__info' >
                <h2>Titulo</h2>
                <h4>Fecha</h4>
                <h3>Descripción</h3>
            </div>
        </div>
    )
}

export default Card
