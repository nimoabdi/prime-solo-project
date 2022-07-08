import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Search from '../Search/Search';
import SeriesSummary from '../SeriesSummary/SeriesSummary';

function SearchList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const shows = useSelector(store=>store.searchReducer)

    const currentClick = (event) => {
      const name = event.target.getAttribute ('name');
      const genres = event.target.getAttribute('genres');
      const summary =event.target.getAttribute('summary');
      const image =event.target.getAttribute('image');
        dispatch({
          type: 'CURRENT_WATCH',
          payload: {name,genres,summary,image}
        })
   

console.log('searchReducer------>',shows)
    }

    
    return(
        <>
         <Search />
        <div> 
          {shows && 
          shows.map((item)=>{
            let push = item.show.image && item.show.image.original
            console.log('The list item is:', item.show.name)
           
            return(
                <>
               
                <div key={item.id} onClick={()=> history.push(`/summaryReducer/${item.id}`)} >
           
                <img className= "img" src={push} />
       
                  {/* <button
                      name={item.show.name}
                      genres={item.show.genres}
                      summary={item.show.summary}
                      image={push}
                >✅</button>
                <button name={item.show.name}
                      genres={item.show.genres}
                      summary={item.show.summary}
                      image={push}>
                       WishList
                  </button> */}

                  </div>
                </>
             
            )
          })
          }

        </div>
        </>
    )
}
export default SearchList;