import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools'

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
    <div className='max-w-[1520px] px-4 m-auto py-12 flex items-center justify-between flex-row'>
        <div className='w-[500px] flex items-center justify-center flex-col'>
            <p className='text-black text-[60px] mb-12 font-bold'>Creat Account</p>
            <p className='flex text-black text-[30px]  '>Have an account ?<span className='ml-2 rounded-md bg-orange-700 text-white hover:text-orange-700 hover:bg-white hover:border-orange-500'><a href="#">Log In</a></span></p>
        </div>
        <div className='w-[700px] h-[600px] bg-black/60'>
            <form action="" className='flex flex-col' onSubmit={handleSubmit(submitform)} >
                <div className='mb-[20px]'>
                    <label htmlFor="username">username</label>
                    <input type="text" id='username' {...register("username",{
                        required:{
                            value:true,
                            message:'username is required'
                        }
                    })}/>
                    <p className='text-red-700'>{errors.username?.message}</p>
                </div>
                

                <div className='mb-[20px]'>
                    <label htmlFor="password">password</label>
                    <input type={pass?"text":"password"} id='password' {...register("password",{
                        pattern:{
                            value:/.(?=.*[A-Z])(?=.*[#!$&*])(?!.*[a-z]{3,})(?=.*[0-9]).{8,}/,
                            message:'wrong password format,password should has at leeast one uppercase letter ,one digit, one of this special characters # ! $ * and the length must be greater or equal to 8 characters '

                        }
                    })}/>
                    <button onClick={togglepassword}>seepass</button>
                    <p className='text-red-700'>{errors.password?.message}</p>
                </div>
                

                <div className='mb-[20px]'>
                    <label htmlFor="email">email</label>
                    <input type="email" id='email' {...register("email",
                    {pattern:{
                        value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message:'wrong email format'

                        }
                    })}/>
                    <p className='text-red-700'>{errors.email?.message}</p>
                </div>
                


                <button>Submit</button>
            </form>
            <DevTool control={control}/>
        </div>

    </div>
  )
}

export default CreatAccount