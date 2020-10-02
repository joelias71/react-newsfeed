import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData, setTitle, searchData } from '../actions/actions'
import {  useParams } from 'react-router-dom'

function NewsContainer({ title, id, Component, setTitle, fetchData, searchData}) {

    let { input } = useParams()
    
    useEffect(() => {
        if(input) {
            searchData(input)
            setTitle(`Búsqueda: ${input}`)
        } else {
            fetchData(id)
            setTitle(title)
        }
    }, [fetchData, setTitle, id, title, input, searchData ])

    return <Component />
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: id => dispatch(fetchData(id)),
        setTitle: title => dispatch(setTitle(title)),
        searchData: value => dispatch(searchData(value))
    }
}

const NewsList = connect(
    null,
    mapDispatchToProps
)(NewsContainer)

export default NewsList
