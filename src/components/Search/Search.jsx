import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
function Search() {
    const [searchShow, setSearchShow] = useState('')
    const dispatch = useDispatch();
    // const searchMovies = useSelector((store)=> store.searchReducer);

    const onHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "FETCH_SERIES", 
            payload: searchShow

        })
        console.log('searching for show ' + searchShow);
    };

    return (
        <div className="searchbar">
            <form className="searchbar_form">
                <input type="text" placeholder="Search Show" 
                value={searchShow} onChange={(event)=> setSearchShow(event.target.value)}
                />
                <button className="btn btn-block" onClick={onHandler}>SEARCH</button>
            </form>
        </div>
    )
}
export default Search;