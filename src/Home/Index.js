import { useEffect, useState } from 'react';

import './homeStyle.css'
import Users from '../Component/AllUsers/Index';
import Loading from '../Component/Gif/loader.gif'
import { motion } from 'framer-motion';



const Home = () => {

// fetching data from API 

    const [users, setUsers] = useState([])

    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
           .then(data => {
            setUsers(data);
            setIsPending(false);
        })
        .catch(err => console.log(err))
    }, [])


    // Pagination

    const [currentPage, SetCurrentPage] = useState(1);
    const [infoPerPage] = useState(5);

    const LastInfoIndex = currentPage * infoPerPage;
    const FirsInfoIndex = LastInfoIndex - infoPerPage;
    
    const currentUsers = (users.slice(FirsInfoIndex, LastInfoIndex))

    const nthPage = Math.ceil(users.length / infoPerPage)


    return (
        <div className="home">  

           <motion.div className="homeText"
           initial={{ y: -100 }}
           animate={{ y: -5 }}
           transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
           >
                <a href='/'>Client Info</a>
                <div className="line"></div>
           </motion.div>

            { isPending ? <img src={Loading} alt="Load GIF" /> :
            
            <div >
                <Users currentUsers={currentUsers}/>
        
                 {/* pagination */}

                <div className="pagination">
                    <motion.button onClick={() => SetCurrentPage(currentPage => Math.max(currentPage - 1, 1))}
                    disabled = {currentPage === 1}
                    initial={{ x: '-30vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 50 }}
                    >Prev</motion.button>

                    <p>{currentPage}</p>

                    <motion.button onClick={() => SetCurrentPage(currentPage => currentPage + 1)}
                    disabled= {currentPage === nthPage}
                    initial={{ x: '30vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 50 }}
                    >Next</motion.button>
                </div>

            </div>

            }
           

        </div>
    );
}
 
export default Home;