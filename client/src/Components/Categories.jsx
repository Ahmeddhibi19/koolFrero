import React from 'react'
import { categories } from '../data/data'

const Categories = () => {
  return (
    <div className='max-w-[1520px] px-4 m-auto py-4'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals Categories</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 px-2 sm:ml-[80px]'>
            {
                categories.map((item)=>{
                    return(
                            <div key={item.id} className='p-4  justify-center items-center hover:scale-105 duration-300 h-[200px] sm:w-[450px] md:w-[300px]  '>
                                <img src={item.imge} alt={item.name} className='object-cover h-full w-full  rounded-2xl shadow-lg inset-x-0 inset-y-2 hover:shadow-md'/>
                                <p className='font-bold  text-center text-2xl'>{item.name}</p>
                            </div>
                )})
            }
        </div>
    </div>
  )
}

export default Categories