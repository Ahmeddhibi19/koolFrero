import React ,{useState}from 'react'
import { mealdata } from '../data/data'
import{ArrowSmRightIcon} from "@heroicons/react/outline";

const Meal = () => {
    const [food,setFood]=useState(mealdata);
    const filtercategory=(category)=>{
        setFood(
            mealdata.filter((item)=>{
                return item.category===category;
            })
        )
    }
  return (
    <div className='max-w-[1520px] px-4 m-auto py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals</h1>
        <div className='flex flex-col lg:flex-row justify-center'>
                <div className='flex justify-center lg:w-[300px] md:justify-center'>
                    {/* Buttons for Large Screens */}
                    <div className="hidden sm:flex sm:flex-wrap">
                    <button className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'
                        onClick={() => setFood(mealdata)}>All</button>
                    <button onClick={() => filtercategory("vegetables")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Salad</button>
                    <button onClick={() => filtercategory("meat")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Meat</button>
                    <button onClick={() => filtercategory("pizza")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Pizza</button>
                    <button onClick={() => filtercategory("fishs")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Fish</button>
                    <button onClick={() => filtercategory("burger")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Burger</button>
                    <button onClick={() => filtercategory("pasta")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Pasta</button>
                    <button onClick={() => filtercategory("desser")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Dessert</button>
                    </div>

                    {/* Buttons for Small Screens */}
                    <div className="sm:hidden">
                    {/* First Row */}
                    <div className="flex justify-center">
                        <button className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'
                        onClick={() => setFood(mealdata)}>All</button>
                        <button onClick={() => filtercategory("vegetables")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Salad</button>
                        <button onClick={() => filtercategory("meat")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Meat</button>
                    </div>

                    {/* Second Row */}
                    <div className="flex justify-center">
                        <button onClick={() => filtercategory("pizza")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Pizza</button>
                        <button onClick={() => filtercategory("fishs")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Fish</button>
                        <button onClick={() => filtercategory("burger")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Burger</button>
                    </div>

                    {/* Third Row */}
                    <div className="flex justify-center">
                        <button onClick={() => filtercategory("pasta")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Pasta</button>
                        <button onClick={() => filtercategory("desser")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-600 hover:border-orange-700'>Dessert</button>
                    </div>
                    </div>
                </div>
                </div>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 py-4'>
            {
                food.map((item)=>(
                    <div key={item.id} className='border-non hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                        className='w-full h-[250px] object-cover rounded-lg ' />
                        <div className='flex justify-between py-2 px-2'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-orange-700 h-10 w-18 rounded-full -mt-7 text-white py-0 px-2 border-8 border-white font-bold'>{item.price}</p>
                        </div>
                        <div className='pl-2 py-4 -mt-7'>
                            <p className='flex  items-center text-indigo-600 cursor-pointer w-[110px]'>View More<ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Meal