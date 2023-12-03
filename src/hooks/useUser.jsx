import  { useEffect, useState } from 'react';

const useUsers = () => {
   const [users,setUsers] = useState('')
   useEffect(()=>{
    fetch('http://localhost:4000/user')
    .then(res => res.json())
    .then(data =>{
        setUsers(data)
    })
   },[])
   return [users]
};

export default useUsers;