import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CreatAccount = () => {
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
        <p className='text-black text-[60px] mb-12 font-bold'>Create Account</p>
        <p className='flex text-black text-[30px]  '>Have an account ?<span className='ml-2 rounded-md bg-orange-700 text-white hover:text-orange-700 hover:bg-white hover:border-orange-500'><Link to='http://localhost:3000/login'>login</Link></span></p>
    </div>
    <div className='w-[3px] bg-black h-[600px] hidden sm:block md:hidden lg:block' ></div>
    <div className='w-full sm:w-[700px] h-[600px] flex justify-center'>
        <form action="" className='flex flex-col w-full justify-center ' onSubmit={handleSubmit(submitform)} >
            <div className='mb-[60px]'>
                <label htmlFor="username" className='text-[30px] font-bold  mb-10 '>username :</label>
                <input type="text" id='username' {...register("username",{
                    required:{
                        value:true,
                        message:'username is required'
                    }
                })} className='focus:outline-none pl-2 border-b-2 w-full border-[#03C988]  '/>
                <p className='text-red-700'>{errors.username?.message}</p>
            </div>
            
            <div className='mb-[60px]'>
                <label htmlFor="password" className='text-[30px] font-bold  mb-10 '>password :</label>
                <input
  type={pass ? 'text' : 'password'}
  id='password'
  {...register('password', {
    required: 'Password is required',
    validate: (value) => {
      const conditions = [
        /[A-Z]/.test(value), // At least one uppercase letter
        /[0-9]/.test(value), // At least one digit
        /[#!$&*]/.test(value), // At least one of these special characters
        value.length >= 8, // Minimum length of 8 characters
      ];

      return conditions.every(Boolean) ||
        
        "Password does not meet the requirements .At least one uppercase letter ,At least one digit,At least one of these special characters [#!$&*] ,Minimum length of 8 characters";
    },
  })}
  className='focus:outline-none pl-2 border-b-2 w-full border-[#03C988]  '
/>


                <button onClick={togglepassword} className="ml-[300px]  sm:ml-[300px] lg:ml-[600px] md:ml-[600px] border-none translate-y-[-30px]">
                    {pass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  
                </button>
                <p className='text-red-700'>{errors.password?.message}</p>
            </div>
            
            <div className='mb-[50px]'>
                <label htmlFor="email" className='text-[30px] font-bold  mb-10 '>email :</label>
                <input type="email" id='email' {...register("email",
                {pattern:{
                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message:'wrong email format'

                    }
                })} className='focus:outline-none pl-2 border-b-2 w-full border-[#03C988]  '/>
                <p className='text-red-700'>{errors.email?.message}</p>
            </div>
            
            
            <div className='flex justify-center'>
                <input type="submit" value="Submit" className=' items-center  bg-[#00df9a] text-white border-none font-bold rounded-md px-4 mr-4 cursor-pointer ' />
                <input type="reset" value="Reset" className='items-center  bg-[#df0000] text-white border-none font-bold rounded-md px-4 ml-4 cursor-pointer' />
            </div>
            
        </form>
        <DevTool control={control}/>
    </div>
</div>


  )
}

export default CreatAccount