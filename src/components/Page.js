import React,{useState} from 'react'
import Card from '../components/Card'
import './Page.css'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'

function Page({data,error,title}) {

    const [offset, setOffset] = useState(0)
    const perPage = 12, numOfPages = Math.ceil(data.length / perPage)
    
    const getContent = () => {
        const sliceList = data.slice(offset, offset + perPage)        

        if(error) {
            return <h1>{error}</h1>
        } else if(data.length === 0) {
            return <h1>Loading ...</h1>
        } else {
            return sliceList.map(item => <Card key={item.news_id} item={item} />)
        }
    }

    return (
        <div className='news-container' >
            <h1 className='news-container__title' >{title}</h1>
            <div className='news-container__list' >
                { getContent() }
            </div>
            <ReactPaginate
                previousLabel={'prev'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={numOfPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={e => setOffset(e.selected * perPage)}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.news,
        error: state.error,
        title: state.title
    }
}

const PageContainer = connect(
    mapStateToProps,
)(Page)

export default PageContainer