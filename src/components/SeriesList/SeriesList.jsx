import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SeriesList() {
    // const dispatch = useDispatch();
    const shows = useSelector(store=>store.searchReducer)
    
    // console.log(shows);

    // useEffect(() => {
    //     dispatch({
    //         type:'FETCH_SHOWS'
    //     })
    // },[])

    return(
        <>
        <div> 
          {shows && 
          shows.map((item)=>{
            let push = item.show.image && item.show.image.original
            console.log('The list item is:', item)
           
            return(
                <>
                <h3 className= "title">{item.show.name}</h3>
                
                <img src={push} />
                <h3 className= "genre">{item.show.genres}</h3>
                <h3 className= "summary" dangerouslySetInnerHTML={{__html: item.show.summary}}>
                </h3>


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