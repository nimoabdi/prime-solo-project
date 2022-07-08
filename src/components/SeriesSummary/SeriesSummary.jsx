import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

function SeriesSummary() {
    const dispatch = useDispatch();

    const nextPageClick = (event) => {
        dispatch({
            type: 'ADD_SUMMARY',
            payload: ''
        })
    }
    return (
        <>

        </>
    )
}
export default SeriesSummary;