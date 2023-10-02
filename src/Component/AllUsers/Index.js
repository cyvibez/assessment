import { NavLink } from 'react-router-dom';
import './Users.css'

const Users = ({currentUsers}) => {
    
    return (
        <div className="usersList">
             {currentUsers?.map((user) => (
                <NavLink to = {`/users/${user.id}`} key={user.id}>
                    <h4>{ user.username }</h4>
                    <p>{ user.email }</p>
                </NavLink>
            ))}
        </div>

    );
}
 
export default Users;