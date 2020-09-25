import React from 'react'
import Card from '../components/Card'
import './Page.css'
import { connect } from 'react-redux'

function Page({data,error,title}) {
    
    let news

    if(error) {
        news = <h1>Error al cargar los datos.</h1>
    } else if(data.length === 0) {
        news = <h1>Loading ...</h1>
    } else {
        news = data.map(item => <Card key={item.news_id} item={item} />)
    }

    return (
        <div className='news-container' >
            <h1 className='news-container__title' >{title}</h1>
            <div className='news-container__list' >
                { news }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.news.data,
        error: state.news.error,
        title: state.news.title
    }
}

const PageContainer = connect(
    mapStateToProps,
)(Page)

export default PageContainer