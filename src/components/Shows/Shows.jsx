import { useDispatch } from "react-redux";
import { useState } from "react";

function Shows({show}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [completed, setCompleted] = useState(false);
    return (
        <div>
            <ul>
                <li>
                    Title: {show.name}
                    Genre: {show.genres}
                    Summary: {show.summary}
                    <img src={show.image} alt={show.title}/>
                </li>
            </ul>
                <button>Add to watched</button>
                <button>Add to wishlist</button>
                <button>Delete</button>
        </div>
    )
}
export default Shows;