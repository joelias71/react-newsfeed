import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData, setTitle } from '../actions/actions'

function NewsContainer({ title, id, Component, fetchData, setTitle }) {
    
    useEffect(() => {
        fetchData(id)
        setTitle(title)
    }, [])

    return <Component />
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: id => dispatch(fetchData(id)),
        setTitle: title => dispatch(setTitle(title))
    }
}

const NewsList = connect(
    null,
    mapDispatchToProps
)(NewsContainer)

export default NewsList
