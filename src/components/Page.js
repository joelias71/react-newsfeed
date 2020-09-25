import React from 'react'
import Card from '../components/Card'
import './Page.css'
import { connect } from 'react-redux'

function Page(props) {
    console.log(props.state.news)

    const news = props.state.news.data.map(item => <Card key={item.news_id} properties={item} />)

    return (
        <div className='news-container' >
            <h1 className='news-container__title' >{props.state.news.title}</h1>
            <div className='news-container__list' >
                { news }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const PageContainer = connect(
    mapStateToProps,
)(Page)

export default PageContainer