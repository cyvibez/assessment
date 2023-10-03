import { useEffect, useState } from 'react';

import './homeStyle.css'
import Users from '../Component/AllUsers/Index';
import Loading from '../Component/Gif/loader.gif'



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

           <div className="homeText">
                <a href='/'>Client Info</a>
                <div className="line"></div>
           </div>

            { isPending ? <img src={Loading} alt="Load GIF" /> :
            
            <div >
                <Users currentUsers={currentUsers}/>
        
                 {/* pagination */}

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

            }
           

        </div>
    );
}
 
export default Home;