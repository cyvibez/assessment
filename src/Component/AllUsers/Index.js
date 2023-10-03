import { NavLink } from 'react-router-dom';

import './Users.css'
import { motion } from 'framer-motion';

const Users = ({currentUsers}) => {
    
    return (
        <motion.div className="usersList"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        >
             {currentUsers?.map((user) => (
                <NavLink to = {`/users/${user.id}`} key={user.id}>
                    <h4>{ user.username }</h4>
                    <p>{ user.email }</p>
                </NavLink>
            ))}
        </motion.div>

    );
}
 
export default Users;