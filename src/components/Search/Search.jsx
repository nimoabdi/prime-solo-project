import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material/Autocomplete";
import {Box} from "@mui/system";
function Search() {
    const [autoComp, setAutoComp] = useState([]);




    const [searchShow, setSearchShow] = useState('')
    const dispatch = useDispatch();
    // const searchMovies = useSelector((store)=> store.searchReducer);

    const onHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "FETCH_SEARCH", 
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