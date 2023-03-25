import React, { useEffect, useState } from 'react'
import GithubUsers from './GithubUsers';

const UseEffectAPI = () => {





    const [users, setUsers] = useState([]);
    const [Loading, setLoading] = useState(true);
    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
            
        } catch (error) {
            console.log("Error is: "+error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
        // getNetflixData();
    }, [])

    if(Loading){
        return <h1 className="ComTitle">Loading...</h1>
    }
  return (
    <>
        <GithubUsers  users={users} key={users.id}/>
    </>
  )
}

export default UseEffectAPI;