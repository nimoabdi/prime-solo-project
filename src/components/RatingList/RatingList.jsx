import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from "@mui/material/Rating";
import Box from '@mui/material/Box';

import './RatingList.css'


function RatingList() {
    return (
       
        <ul className='ratelist'>
            <h1>RATINGS</h1>
            <li>
                <Box sx={{ p: 4 }}>
                <Card sx={{ maxWidth: 510}} elevation={1} >
                <Typography variant="h5" >
                    <p className='users'> You rated this:
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                    <img className='rating_img' src='../images/teentitansolo.jpg' />
                </Typography>    
                </Card>
                </Box>

                <Box sx={{ p: 4 }}>
                <Card sx={{ maxWidth: 510}} elevation={1} >
                <Typography variant='h5' >
                <p  className='users'> Badra rated this:
                <Rating name="half-rating" defaultValue={5} />
                </p>
                <img className='rating_img' src='../images/demonslayer.jpg' />
                </Typography>
                </Card>
                </Box>

                <Box sx={{ p: 4 }}>
                <Card sx={{ maxWidth: 510}} elevation={1} >
                <Typography variant="h5" >
                <p className='users' >Andrew rated this: 
                <Rating name="half-rating" defaultValue={1} />
                </p>
                <img className='rating_img' src='../images/bobsolo.jpg' />
                </Typography>
                </Card>
                </Box>

                <Box sx={{ p: 4 }}>
                <Card sx={{ maxWidth: 510}} elevation={1} >
                <Typography variant="h5" >
                    <p className='users'>Savon rated this: 
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                <img className='rating_img' src='../images/thewiresolo.jpg' />
                </Typography>
                </Card>
                </Box>

                <Box sx={{ p: 4 }}>
                <Card sx={{ maxWidth: 510}} elevation={1} >
                <Typography variant="h5">
                    <p className='users'>Fatuma rated this: 
                    <Rating name="half-rating" defaultValue={3.5} />
                    </p>
                <img className='rating_img' src='../images/chicagofiresolo.jpg' />
                </Typography>
                </Card>
                </Box>

                <Box sx={{ p: 4 }}>
                <Card sx={{ maxWidth: 510}} elevation={1} >
                <Typography variant="h5">
                    <p className='users'>MountaindewMuncher73 rated this: 
                    <Rating name="half-rating" defaultValue={2} />
                    </p>
                <img className='rating_img' src='../images/narutosolo.jpg' />
                </Typography>
                </Card>
                </Box>

                <Box sx={{ p: 4 }}>
                <Card sx={{ maxWidth: 510}} elevation={1} >
                <Typography variant="h5">
                    <p className='users'> Miski rated this:
                    <Rating name="half-rating" defaultValue={3.5} />
                    </p>
                <img className='rating_img' src='../images/svu.jpg' />
                </Typography>
                </Card>
                </Box>

                <Box sx={{ p: 4 }}>
                <Card sx={{ maxWidth: 510}} elevation={1} >
                <Typography variant="h5">
                    <p className='users'> Joey rated this:
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                <img className='rating_img' src='../images/soloprojorville.jpg' />
                </Typography>
                </Card>
                </Box>

                <Box sx={{ p: 4 }}>
                <Card sx={{ maxWidth: 510}} elevation={1} >
                <Typography variant="h5">
                    <p className='users'> Alex rated this:
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                <img className='rating_img' src='../images/30rocksolo.jpg' />
                </Typography>
                </Card>
                </Box>
            </li>
        </ul>
    )
}
export default RatingList;