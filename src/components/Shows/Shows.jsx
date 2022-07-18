import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import './Shows.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Shows({ Shows }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // deleted from current watching
  const handleDelete = () => {
    dispatch({
      type: "DELETE_SHOW",
      payload: Shows.id,
    });
    console.log("in the fetch current watch>>>>>>>", Shows.id);
  };

// watched component
  const Watched = (event) => {
   
    swal({
      title: "Added to watched 👍",
      text: "Nice",
      icon: "success",
    });
    const name = event.target.getAttribute("name");
    const image = event.target.getAttribute("image");
    dispatch({
      type: "UPDATE_SHOW",
      payload: Shows.id
    });
    // history.push('/watchedlist')
    console.log("showsReducer------>", Shows);
};

  return (
    
    <Card className="flex-fill" sx={{ maxWidth: 345}} elevation={1} >
      <CardMedia
      // {Shows.name}
      component="img"
      alt="Shows Image"
      height="250"
      
      image= {Shows.image}
      />
        <CardContent>
      <Typography gutterBottom variant="h7" >
      Title: {Shows.name}
      </Typography>

        </CardContent>
      
      <Button variant="primary" size="small" className="btn btn-block" onClick={handleDelete}>
        Delete
      </Button>
      <Button variant="primary" size="small" className="btn btn-block" onClick={Watched}>
        add to watched
      </Button>
    </Card >
  
  );
}

{/* <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
  

export default Shows;
