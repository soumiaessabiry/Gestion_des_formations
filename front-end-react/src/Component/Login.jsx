import React from 'react'
import "../App.css";
import loginimg from '../image/loginimg.gif'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useJwt } from "react-jwt";
import { isExpired, decodeToken } from "react-jwt";
const err={color:'red'}

const Login =() => {
  const navigate=useNavigate()
  const baseURL = "http://localhost:4166/api/auth/login";
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [errorvalidation,seterror]=useState(false)
  const [errApi,seterrorApi]=useState(false)
  let DecodToken=""
  const DataUser={
    email,password
  }
  const submitdata=async(e)=>{
    e.preventDefault()
    if(email.length==0||password.length<4){seterror(true)}else{
          axios.post(baseURL,DataUser)
          .then((response) => {
            DecodToken=decodeToken(response.data.token)
            if(DecodToken){
              localStorage.setItem("token",response.data.token)
              if(DecodToken.Role==="Admin")navigate('/Dashbord')
              else navigate('/PageError')
            }
            seterrorApi(response.data)
          })
          .catch((error) => {
              console.log(error)
          });
    }
  }


return (
    <>
      <div className="h-100 bg-white">
      <div className="login py-4">
          <div className='container'>
            <div className='row rowlog g-0'>
              <div className='col-5'>
                  <img src={loginimg} className="img-fluid " style={{"height": "100%","width": "100%"}}></img>
              </div>
              <div className='col-7  py-5 '>
                    <form className='text-center' onSubmit={submitdata} method="POST" >
                    <h1 className='titlelog'>Login</h1>
                    <div>{(errApi)?<span style={err}>{errApi}</span>:""}</div>

                      <div className='mb-4 '>
                          <input type="email" name='email' className='inp px-4 ms-2' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} />
                          <div>{(errorvalidation&&email.length<=0)?<span style={err}>email et obligatoir</span>:""}</div>
                      </div>                            
                      <div className='mb-4'>
                            <input type="password" name='password' className='inp  px-4 ms-2' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
                            <div>{(errorvalidation&&password.length<4)?<span style={err}>password et obligatoir</span>:""}</div>

                        </div>
                      <div className=' '>
                           <button className='btnlog'>Login</button>
                      </div>
                    </form>
              </div>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}
export default Login