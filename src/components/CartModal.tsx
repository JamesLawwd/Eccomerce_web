"use client"
import React from 'react'
import Image from 'next/image'

const CartModal = () => {

    const cartItems = false
  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartItems ? (
        <div className=''>Cart is Empty</div>
      ) : (
        <>
         <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
        <div className='flex gap-4'>
            <Image src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={72} height={96} className='object-cover rounded-md'/>
            <div className='flex flex-col justify-between w-full'>
                {/* TOP */}
                <div className=""></div>
            
                {/* TITLE */}
                <div className="">
                    <h3>Prodcut Name</h3>
                    <div className="">Ksh500</div>
                </div>
                {/* DESC */}
                <div className="">
                    available
                </div>
                {/* BOTTOM */}

            </div>
        </div>
        </>
      )}
    </div>
  )
}

export default CartModal
