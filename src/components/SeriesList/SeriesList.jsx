import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SeriesList() {
    const dispatch = useDispatch();
    const shows = useSelector(store => store.showsReducer)
    
    console.log(shows);

    useEffect(() => {
        dispatch({
            type:'FETCH_SHOWS'
        })
    },[])

    return(
        <>
        <div> 
          {shows && 
          shows.map((item)=>{
            console.log('The list item is:', item)
            return(
                <>
                <img src={shows.id.url.image.original}></img>
                </>
            )
          })
          }

        </div>
        
        
        </>
    )





    // return (
    //     <div className="container" >
    //         <h1>Series here</h1>
          
    //         { shows && shows ? 
    //         shows.map((show) => (
    //             <li key={show.id}>
    //             </li>
    //         )): null
        
    //         }
            
    //     </div>
     
        
    // )
}
export default SeriesList;