import axios from 'axios'
import React, { useState } from 'react'

type Props = {
    
}

export default function Login({}: Props) {
  const [user, setUser] = useState({
    email:'',
    password:''
  })

  return (
    <div>
      {/* <input type="text" placeholder='Username' /> */}
      <input type="text" placeholder='Email' onChange={(e) => {
        setUser((prevState => {
          return {
            email: e.target.value,
            password: prevState.password
          }
        }))}}/>
      <input type="text" placeholder='Password' onChange={(e) => {
        setUser((prevState => {
          return {
            email: prevState.password,
            password: e.target.value
          }
        }))}}/>
      <button onClick={() => {
        console.log('posting')
        axios.post("http://127.0.0.1:5000/post_user", {
          email: 'email',
          password:'pass'
        }).then((data) => {
          console.log(data.data)
        })
      }}>
        Submit
      </button>
    </div>
  )
}