import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function RatingList() {
    return (
        <ul className='ratelist'>
            <li>
                <Typography >
                <p> Badra rated this:
                <Rating name="half-rating" defaultValue={5} />
                </p>
                <img src='../images/demonslayer.jpg' />
                </Typography>

                <Typography >
                <p>Andrew rated this: 
                <Rating name="half-rating" defaultValue={1} />
                </p>
                <img src='../images/bobsolo.jpg' />
                </Typography>

                <Typography >
                    <p>Savon rated this: 
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                <img src='../images/thewiresolo.jpg' />
                
                </Typography>

                <Typography>
                    <p>Fatuma rated this: 
                    <Rating name="half-rating" defaultValue={3.5} />
                    </p>
                <img src='../images/chicagofiresolo.jpg' />
                </Typography>

                <Typography>
                    <p>MountaindewMuncher73 rated this: 
                    <Rating name="half-rating" defaultValue={2} />
                    </p>
                <img src='../images/narutosolo.jpg' />
                </Typography>

                <Typography>
                    <p> Miski rated this:
                    <Rating name="half-rating" defaultValue={3.5} />
                    </p>
                <img src='../images/svu.jpg' />
                </Typography>

                <Typography>
                    <p> Joey rated this:
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                <img src='../images/soloprojorville.jpg' />

                </Typography>

                <Typography>
                    <p> Alex rated this:
                    <Rating name="half-rating" defaultValue={5} />
                    </p>
                <img src='../images/30rocksolo.jpg' />
                </Typography>
            </li>
        </ul>
    )
}
export default RatingList;