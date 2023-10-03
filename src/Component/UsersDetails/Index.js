import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import './usersDetailsStyle.css'
import { FaRegCircleUser, FaPhone, FaGlobe, FaLocationDot } from "react-icons/fa6";
import Loading  from '../Gif/loader.gif'
import { AiOutlineProfile } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { motion } from 'framer-motion';



const Details = () => {
    
//   fecthing dynamic data 

    const {id} = useParams()

    const [user, setUser] = useState({})

    const [currentId, setCurrentId] = useState(id);
    
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${currentId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setIsPending(false);
            })
            .catch(err => console.log(err))
    }, [currentId]) 

    const currentIdDetails = parseInt(currentId)

    // i used currentId, instead of id, to preview to prev/next user data 
    // when the prev/next btn is clicked without navigating the to the homepage 
  

    return (
        <div className="details">

            <motion.div className="detailsText"
                initial={{ y: -100 }}
                animate={{ y: -5 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            >
                <a href='/'>Client Info</a>
                <div className="line"></div>
           </motion.div>

                 {/* User Details */}

            { isPending ? <img src={Loading} alt="Load GIF" /> :
            <div>

                <motion.div className="detailInfo"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1, duration: 1.5 }}
                >
                    <div className="profile">
                        <div className="profileText">
                            <h4>{user?.username}</h4>
                            <p>{user?.email}</p>
                        </div>
                        <div className="profileIcon">
                            <FaRegCircleUser />
                        </div>
                    </div>
                </motion.div>

                <motion.div className="detailInfo_two"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                >

                    <div className="name">
                        <span><AiOutlineProfile /></span>
                        <h3>{user?.name}</h3>
                    </div>

                    <div className="address_geo">
                        <div className="address">
                            <span><FaLocationDot /></span>
                            <p>{user?.address.street}, {user?.address.suite}, {user?.address.city}, {user?.address.zipcode}</p>
                        </div>
                        <div className="geo">
                            <p>Lat: {user?.address.geo.lat}</p>
                            <p>Lng: {user?.address.geo.lng}</p>
                        </div>
                    </div>
                  
                    <div className="tel_website">
                        <div className="tel">
                            <div className="phone"><FaPhone /></div>
                            <p>{user.phone}</p>
                        </div>

                        <div className="website">
                            <div className="web"><FaGlobe /></div>
                            <p>{user.website}</p>
                        </div>
                   </div>

                   <div className="companyDetails">
                        <div className="company">
                            <span><HiOutlineOfficeBuilding /></span>
                            <h5>{user.company.name}</h5>
                        </div>

                        <i>"{user.company.catchPhrase}"</i>

                        <p>{user.company.bs}</p>
                   </div>

                </motion.div>

                {/* User Data Navigation  */}

                <div className="pagination">
                    <motion.button onClick={() => setCurrentId(currentId => Math.max(currentIdDetails - 1, 1))}
                    disabled = {currentId === 1}
                    initial={{ x: '-30vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 50 }}
                    >Prev</motion.button>

                    <motion.button onClick={() => setCurrentId(currentId => currentIdDetails + 1)}
                    disabled= {currentId === 10}
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
 
export default Details;