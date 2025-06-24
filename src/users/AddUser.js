import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from "react-router"

export default function AddUser() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/"); // ✅ Redirect to home after submit
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded shadow p-4 mt-2'>
          <h2 className='text-center'>Register User</h2>
          <form onSubmit={onSubmit}> {/* ✅ Fixed attribute and function name */}
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
            <button type='reset' className='btn btn-danger mx-2'>Reset</button> {/* Changed to reset instead of submit */}
          </form>
        </div>
      </div>
    </div>
  );
}
