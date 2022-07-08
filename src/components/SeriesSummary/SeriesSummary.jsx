import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

function SeriesSummary() {
    const dispatch = useDispatch();
    const item = useSelector(store => store.summaryReducer)

    const nextPageClick = (event) => {
        event.preventDefault()
        dispatch({
            type: 'GET_DETAIL',
            payload: params.id
        })
    }
    return (
        <div key={item.id}>
        <h3 className= "title">{item.show.name}</h3>
        <img className= "img" src={push} />
        <h3 className= "genre">{item.show.genres}</h3>
        <h3 className= "summary" dangerouslySetInnerHTML={{__html: item.show.summary}}>
        </h3>
          <button 
                  name={item.show.name}
                  genres={item.show.genres}
                  summary={item.show.summary}
                  image={push}
                  onClick={nextPageClick}
        >Add to Currently Watching 
        </button>
        </div>
    )
}
export default SeriesSummary;