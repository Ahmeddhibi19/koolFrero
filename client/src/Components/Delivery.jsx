import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick delivery App</h3>
        <div className="w-full mx-auto grid md:grid-cols-2">
            <img
                src="https://kmphitech.com/wp-content/uploads/2021/04/Grocery-Delivery-App-Development.png"
                alt=""
                className="mx-auto my-4 w-full md:w-1/2 object-cover"
            />
            <div className='flex flex-col justify-center sm:text-center lg:text-left  '>
                <p className='text-[#00df9a] font-bold '>Get the App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless convenience on-demand</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                 Aenean commodo ligula eget dolor. Aenean massa. 
                 Cum sociis natoque penatibus et magnis dis parturient 
                 montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem.
                   Nulla consequat massa quis enim. Donec pede justo, 
                   fringilla vel, aliquet nec, vulputate eget, arcu. 
                   In enim justo, rhoncus ut, imperdiet a, venenatis
                    vitae, justo. Nullam dictum felis eu pede mollis 
                    pretium. Integer tincidunt. Cras dapibus. Vivamus 
                    elementum semper nisi. Aenean vulputate eleifend 
                    tellus. Aenean leo ligula, porttitor eu, consequat
                     vitae, eleifend ac, enim.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-0'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Delivery