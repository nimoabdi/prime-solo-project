import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SeriesView() {
    const dispatch = useDispatch();
    const series = useSelector(store => store.series)
    
    console.log(series);

    useEffect(() => {
        dispatch({
            type:'FETCH_SERIES'
        })
    },[])

    return (
        <div className="container" >
            <h1>Series here👽</h1>
            <ul>
            { series && series.length ? 
            shows.map((show) => (
                <li key={show.id}>
                    
                </li>
            )): null }
            </ul>
        </div>
        
    )
}
export default SeriesView;