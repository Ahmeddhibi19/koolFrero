import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {Link} from 'react-router-dom';


const LogIn = () => {
    const [pass,setPass]=useState(false);
    const form =useForm();
    const {register , control , handleSubmit,formState}=form;
    const { errors }=formState;
    const submitform=(data)=>{
        console.log("form submitted",data)
    }
    const togglepassword=()=>{
        setPass((prev)=>!prev);
        console.log(pass)
    }
  return (
    <div className='max-w-[1520px] px-4 m-auto py-12 flex flex-col sm:flex-col lg:flex-row items-center justify-between'>
    <div className='w-full sm:w-[500px] flex items-center justify-center flex-col'>
        <p className='text-black text-[40px] mb-12 font-bold text-center'>Welcome ... Enter your contact details </p>
        <p className='flex text-black text-[30px]  '>Don't have an account ?<span className='ml-2 rounded-md bg-orange-700 text-white hover:text-orange-700 hover:bg-white hover:border-orange-500'><Link to='/login/creataccount' el>Sign up</Link></span></p>
    </div>
    <div className='w-[3px] bg-black h-[600px] hidden sm:block md:hidden lg:block' ></div>
    <div className='w-full sm:w-[700px] h-[600px] flex justify-center'>
        <form action="" className='flex flex-col w-full justify-center ' onSubmit={handleSubmit(submitform)} >
        <div className='mb-[50px]'>
                <label htmlFor="email" className='text-[30px] font-bold  mb-10 '>email :</label>
                <input type="email" id='email'  className='focus:outline-none pl-2 border-b-2 w-full border-[#03C988]  '/>
                
            </div>
            <div className='mb-[60px]'>
                <label htmlFor="password" className='text-[30px] font-bold  mb-10 '>password :</label>
                <input
  type={pass ? 'text' : 'password'}
  id='password'
 
  className='focus:outline-none pl-2 border-b-2 w-full border-[#03C988]  '
/>


                <button onClick={togglepassword} className="ml-[300px]  sm:ml-[300px] lg:ml-[600px] md:ml-[600px] border-none translate-y-[-30px]">
                    {pass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  
                </button>
                
            </div>
            
            
            
            
            <div className='flex justify-center'>
                <input type="submit" value="Submit" className=' items-center  bg-[#00df9a] text-white border-none font-bold rounded-md px-4 mr-4 cursor-pointer ' />
                <input type="reset" value="Reset" className='items-center  bg-[#df0000] text-white border-none font-bold rounded-md px-4 ml-4 cursor-pointer' />
            </div>
            
        </form>
        
    </div>
</div>
  )
}

export default LogIn