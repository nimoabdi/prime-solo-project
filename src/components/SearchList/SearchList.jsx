import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../Search/Search';

function SearchList() {
    const dispatch = useDispatch();
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
            // let description = dangerouslySetInnerHTML={{__html: item.show.summary}}
            console.log('The list item is:', item.show.name)
           
            return(
                <>
               
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
                          onClick={currentClick}
                >Add to Currently Watching 
                  </button>
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