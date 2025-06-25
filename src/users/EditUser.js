import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ Corrected

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user); // ✅ Corrected URL
    navigate("/");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`); // ✅ Corrected URL
    setUser(result.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded shadow p-4 mt-2'>
          <h2 className='text-center'>Edit User</h2>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                className="form-control my-2"
                value={name}
                onChange={onInputChange}
                placeholder='Enter Name'
              />
            </div>

            <div>
              <label htmlFor='username'>UserName</label>
              <input
                type='text'
                name='username'
                className="form-control my-2"
                value={username}
                onChange={onInputChange}
                placeholder='Enter UserName'
              />
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className="form-control my-2"
                value={email}
                onChange={onInputChange}
                placeholder='Enter Email'
              />
            </div>

            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link to="/" className='btn btn-danger mx-2'>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
