import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function Completed({show}) {
    const dispatch = useDispatch();

    return (
        
        <div>
             <Stack spacing={2}>
             <Typography component="legend">Rate Show</Typography> 
          <Rating name="half-rating" defaultValue={0} precision={0.1} />
        </Stack>
            Title: {show.name}
            <img className= "img" src={show.image} alt={show.title} />

        </div>
    )
}
export default Completed;