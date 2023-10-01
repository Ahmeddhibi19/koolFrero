import React,{useState} from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'


const Featured = () => {
    const sliders= [
        {
            url:'https://ichef.bbci.co.uk/news/976/cpsprodpb/11ADE/production/_110541427_chinesefood.jpg'
        },
        {
            url:'https://www.food-station.fr/img/sec-one-img1.jpg'
        },
        {
           url:'https://anestisxasapotaverna.gr/wp-content/uploads/2021/12/ARTICLE-1.jpg' 
        },
        {
            url:'https://i0.wp.com/news.northeastern.edu/wp-content/uploads/2023/05/processed_foods_1400.jpg?fit=1400%2C933&ssl=1'
        },
        {
            url:'https://insanelygoodrecipes.com/wp-content/uploads/2021/12/Spaghetti-Bolognese-with-Basil-in-a-Plate.jpg'
        }
    ]
    const[currentindex,setCurrentindex]=useState(0);
    const prevSlider=()=>{
        const isfirstslide= currentindex===0;
        const newindex=isfirstslide ? sliders.length-1 : currentindex-1 ;
        setCurrentindex(newindex);
    }
    const nextslider=()=>{
        const islasttslide=currentindex===sliders.length-1;
        const newindex=islasttslide ? 0:currentindex+1;
        setCurrentindex(newindex);
    }
    const movetoslide=(slideindex)=>{
        setCurrentindex(slideindex);
    }
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 -px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            style={{backgroundImage:`url(${sliders[currentindex].url})`}}>
        </div>
        <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer '>
            <BsChevronCompactLeft onClick={prevSlider}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer '>
            <BsChevronCompactRight onClick={nextslider}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((slideritem,sliderindex)=>(
                    <div key={sliderindex} className='text-2xl cursor-pointer' onClick={()=>movetoslide(sliderindex)}>
                        <RxDotFilled />
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Featured