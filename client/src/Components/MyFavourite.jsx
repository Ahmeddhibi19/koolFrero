import React, {useState}from 'react'

import{ArrowSmRightIcon} from "@heroicons/react/outline";
import { FaHeart, FaStar, FaHome } from 'react-icons/fa';
import { myfavourite } from '../data/data';

const MyFavourite = () => {
            
        const objectArray = [];
        for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const objectString = localStorage.getItem(key);
        const object = JSON.parse(objectString);
        objectArray.push(object);
        }

        
        const [food,setFood]=useState(objectArray);
    
    const [favourite, setFavourite] = useState(myfavourite);
        const toggleLike = (itemId) => {
            setFood((prevFood) =>
              prevFood.map((item) => {
                if (item.id === itemId) {
                  const updatedItem = { ...item, liked: !item.liked };
                  if (!updatedItem.liked) {
                    localStorage.removeItem(updatedItem.id)
                  } else {  
                  }
                  return updatedItem;
                }
                return item;
              })
            );
          };
          

  return (
    <div className='w-full px-4 m-auto py-12'>
        <span className='w-full flex bg-gray-200 h-[70px] items-center justify-center text-[30px]'>My Favourite meals</span>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 py-4'>
            {
                objectArray.map((item)=>(
                    <div key={item.id} className='border-non hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                        className='w-full h-[250px] object-cover rounded-lg ' />
                        <div className='flex justify-between py-2 px-2'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-orange-700 h-10 w-18 rounded-full -mt-7 text-white py-0 px-2 border-8 border-white font-bold'>{item.price}</p>
                        </div>
                        <div className='pl-2 py-4 -mt-7'>
                            <p className='flex  items-center text-indigo-600 cursor-pointer w-[110px]'>View More
                                <ArrowSmRightIcon className='w-5 ml-2'/>
                                {
                                    
                                    }
                                    <button onClick={() => toggleLike(item.id)} className='border-none'>
                                        {
                                            item.liked ? (
                                                
                                                <FaHeart color="red" />
                                              
                                            ) : (
                                                
                                                <FaHeart color="gray" />
                                             
                                            )
                                        }
                                    </button>
                            </p>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default MyFavourite