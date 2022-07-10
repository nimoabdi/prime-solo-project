import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Shows from '../Shows/Shows';

function CurrentWatch() {
    const dispatch = useDispatch();
    const shows = ((store)=> store.showsReducer)

    

    return (
        <div>
            
             <div>
            <ul>
                <li>
                    Title: {shows.name}
                    Genre: {shows.genres}
                    Summary: {shows.summary}
                    <img src={shows.image} alt={shows.title}/>
                </li>
            </ul>
                <button>Add to watched</button>
                <button>Add to wishlist</button>
                <button>Delete</button>
        </div>
        </div>
    )
}
export default CurrentWatch;
