import './newUser.css'

import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'


function NewUser({addNewuser}) {
    const [user, setUser] = useState({ 
        id: uuidv4(),
        image: '',
        firstName: '',
        lastName: '',
        age: null,
        from: '',
        job: '',
        gender: ''
    })

        // console.log(user)
        const triggerSubmit = (e)=>{
            e.preventDefault()
            addNewuser(user)
        }

  return (
    <div className='modal-wrapper'>
        <div className="overlay">
            <div className="modal">
                <h2>create user</h2>
                <form onSubmit={triggerSubmit}>
                    <label>
                        <span>Imae URL:</span>
                        <input onChange={(e)=>{setUser((init)=>{
                            return {...init, image: e.target.value}
                        })}} type="url" required />
                    </label>
                    <label>
                        <span>Firstname: </span>
                        <input onChange={(e)=>{setUser((init)=>{
                            return {...init, firstName: e.target.value}
                        })}} type="text" required />
                    </label>
                    <label>
                        <span>Lastname: </span>
                        <input onChange={(e)=>{setUser((init)=>{
                            return {...init, lastName: e.target.value}
                        })}} type="text" required />
                    </label>
                    <label>
                        <span>Age: </span>
                        <input onChange={(e)=>{setUser((init)=>{
                            return {...init, age: e.target.value}
                        })}} type="number" required />
                    </label>
                    <label>
                        <span>From: </span>
                        <input onChange={(e)=>{setUser((init)=>{
                            return {...init, from: e.target.value}
                        })}} type="text" required />
                    </label>
                    <label>
                        <span>Job: </span>
                        <input onChange={(e)=>{setUser((init)=>{
                            return {...init, job: e.target.value}
                        })}} type="text" required />
                    </label>
                    <div className="gender">
                        <span>Gender</span>
                        <label>
                            <small>Male</small>
                            <input onChange={(e)=>{setUser((init)=>{
                            return {...init, gender: e.target.value}
                        })}} type="radio" name = 'male' value='male' />
                        </label>
                        <label>
                            <small>Female</small>
                            <input onChange={(e)=>{setUser((init)=>{
                            return {...init, gender: e.target.value}
                        })}} type="radio" name = 'male' value='female' />
                        </label>
                    </div>
                    <button className='modal-btn'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewUser