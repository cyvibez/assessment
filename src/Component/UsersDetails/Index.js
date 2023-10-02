import { useParams } from "react-router-dom";


const Details = ({users}) => {
    
    const {id} = useParams()

    const user = users[id]

    console.log(user);
    

    return (
        <div className="details">
            {/* <p>{user.username}</p> */}

        </div>
    );
}
 
export default Details;