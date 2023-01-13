import React from 'react'
import "../App.css";
import loginimg from '../loginimg.gif'


const Login = () => {
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
                    <form className='text-center' >
                    <h1 className='titlelog'>Login</h1>
                      <div className='mb-4'>
                          <input type="email" name='email' className='inp px-4 ms-2' placeholder='email' />
                      </div>                            
                      <div className='mb-4'>
                            <input type="password" name='password' className='inp  px-4 ms-2' placeholder='password' />
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