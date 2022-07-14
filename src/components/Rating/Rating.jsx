import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function ShowRating() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  console.log("params------->", params.id);

  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "RATE_SHOW",
      payload: { rating, show: params.id },
    });
    setRating('');
  };

  return (
   
    (
        <Box
          sx={{
            '& > legend': { mt: 2 },
          }}
        >
          <Typography component="legend">Rate Show</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(handleSubmit) => {
              setRating('');
            }}
          />
       <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </Box>
  )
  )
}
export default ShowRating;
