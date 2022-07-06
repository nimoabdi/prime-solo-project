import { useState } from 'react';

function Search() {
    const [searchShow, setSearchShow] = useState('')
    const onHandler = (event) => {
        event.preventDefault();
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