
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [user,setUsers] = useState([]);

    const {id} = useParams();

    useEffect(()=>{
        console.log("Code with me");
        loadUsers();
    },[])

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser= async (id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers();
    }
  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">SL.NO</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    {
        user.map((user,index)=>(
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>

      <td>
        < Link className='btn btn-outline-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>
        <Link className='btn btn-outline-secondary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
        <Link className='btn btn-outline-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</Link>
      </td>
    </tr>

        ))
    }

    
   
   
  </tbody>
</table>
        </div>
      
    </div>
  )
}
