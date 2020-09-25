import React from 'react'
import './Card.css'

function Card({ item }) {

    const img = item.img_url == null ? './img/default.png'  : item.img_url
    
    return (
        <div className='newsCard' >
            <img src={img} alt={item.title} />
            <div className='newsCard__info' >
                <h2>{item.title}</h2>
                <h4>Fecha</h4>
                <a href={item.url}>Ver más</a>
            </div>
        </div>
    )
}

export default Card
