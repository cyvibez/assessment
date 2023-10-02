import { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';

import './homeStyle.css'
import Users from '../Component/AllUsers/Index';



const Home = () => {

// fetching data from API 

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])


    // Pagination

    const [currentPage, SetCurrentPage] = useState(1);
    const [infoPerPage] = useState(5);

    const LastInfoIndex = currentPage * infoPerPage;
    const FirsInfoIndex = LastInfoIndex - infoPerPage;
    
    const currentUsers = (users.slice(FirsInfoIndex, LastInfoIndex))

    const nthPage = Math.ceil(users.length / infoPerPage)
    // console.log(currentPage);

    



    return (
        <div className="home">  

            <div className="homeText">
                <a href='/'>Client Info</a>
                <div className="line"></div>
            </div>

           <Users currentUsers={currentUsers}/>
        
            <div className="pagination">
                <button onClick={() => SetCurrentPage(currentPage => Math.max(currentPage - 1, 1))}
                disabled = {currentPage === 1}
                >Prev</button>
                <p>{currentPage}</p>
                <button onClick={() => SetCurrentPage(currentPage => currentPage + 1)}
                disabled= {currentPage === nthPage}
                >Next</button>

            </div>
           

        </div>
    );
}
 
export default Home;