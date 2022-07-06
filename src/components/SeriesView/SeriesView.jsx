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
        <div>
            <h1>Series here👽</h1>
            <ul>
            {series.map(item => {
                return (
                    <li key={item.id}>
                    
                    </li>
                )
            })}
            </ul>
        </div>
        
    )
}
export default SeriesView;