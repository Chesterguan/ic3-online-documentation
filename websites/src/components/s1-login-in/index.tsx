import React from 'react'
import LoginBox from './login-box'
// import styles from 'index.module.css'
import Ic3Icon from './ic3-icon'



const LoginIn = () => {
    return (
        <div className={` w-[100vw] h-[100vh] `}>
            <div className='bg-[#122b52] h-[21vh]'>
                <Ic3Icon />
            </div>
            <div className='flex items-center justify-center w-[100%] h-[19vh] font-[500] text-[2rem]'>
                Welcome to IC3 docusaurus system!
            </div>
            <div className='flex items-center justify-center w-[100vw] h-[50vh]'> <LoginBox /></div>
        </div>
    )
}

export default LoginIn
