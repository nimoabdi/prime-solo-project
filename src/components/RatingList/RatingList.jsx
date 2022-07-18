import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import './RatingList.css'



function RatingList() {
    return (
        <ul className='ratelist'>
            <li>
                <Card  >
                <Typography>
                    <p> I rated this:
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                    <img className='rating_img' src='../images/teentitansolo.jpg' />
                </Typography>    
                </Card>


                <Typography >
                <p> Badra rated this:
                <Rating name="half-rating" defaultValue={5} />
                </p>
                <img className='rating_img' src='../images/demonslayer.jpg' />
                </Typography>

                <Typography >
                <p>Andrew rated this: 
                <Rating name="half-rating" defaultValue={1} />
                </p>
                <img className='rating_img' src='../images/bobsolo.jpg' />
                </Typography>

                <Typography >
                    <p>Savon rated this: 
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                <img className='rating_img' src='../images/thewiresolo.jpg' />
                
                </Typography>

                <Typography>
                    <p>Fatuma rated this: 
                    <Rating name="half-rating" defaultValue={3.5} />
                    </p>
                <img className='rating_img' src='../images/chicagofiresolo.jpg' />
                </Typography>

                <Typography>
                    <p>MountaindewMuncher73 rated this: 
                    <Rating name="half-rating" defaultValue={2} />
                    </p>
                <img className='rating_img' src='../images/narutosolo.jpg' />
                </Typography>

                <Typography>
                    <p> Miski rated this:
                    <Rating name="half-rating" defaultValue={3.5} />
                    </p>
                <img className='rating_img' src='../images/svu.jpg' />
                </Typography>

                <Typography>
                    <p> Joey rated this:
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                <img className='rating_img' src='../images/soloprojorville.jpg' />

                </Typography>

                <Typography variant="h5">
                    <p> Alex rated this:
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                <img className='rating_img' src='../images/30rocksolo.jpg' />
                </Typography>
            </li>
        </ul>
    )
}
export default RatingList;