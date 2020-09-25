import React from 'react'
import './Card.css'
import TextTruncate from 'react-text-truncate'
import { getDate } from '../util/date'

function Card({ item }) {
    
    const img = item.img_url == null ? './img/default.png'  : item.img_url
    const date = getDate(item.date)
    
    return (
        <div className='newsCard' >
            <img src={img} alt={item.title} />
            <div className='newsCard__info' >
                <TextTruncate 
                    line={2}
                    element='h2'
                    truncate='...'
                    text={item.title}
                />
                <h4>{date}</h4>
                <h3>{item.source_name}</h3>
                <a href={item.url}>Ver más</a>
            </div>
        </div>
    )
}

export default Card
